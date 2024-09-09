import { questions } from "../data/questions";
import TestItem from "../components/testpage/TestItem";
import { useState } from "react";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { testInstance } from "../apis/testApi";
import { useUserInfo } from "../zustand/useAuthStore";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const Test = () => {
    const { testid } = useParams();
    const targetQuestions = questions[testid];
    const [answers, setAnswers] = useState(Array.from({ length: targetQuestions.length }));
    const navigate = useNavigate();
    const { userId, nickname } = useUserInfo();

    const handleAnswers = (idx, selected) => {
        setAnswers([...answers].with(idx, selected));
    };

    const getMBTIResult = async () => {
        const isAnswersSelected = answers.every((answer) => answer != undefined);
        if (!isAnswersSelected) {
            alert("모든 문항에 답을 해주세요!");
            return;
        }
        const result = calculateMBTI(testid, answers);
        return result;
    };

    const postMyTestResult = async (resultObj) => {
        await testInstance.post(`/${testid}`, resultObj);
    };

    const { mutate } = useMutation({
        mutationFn: postMyTestResult,
        onSuccess: (data) => navigate(`/testresult/${testid}`, { state: data }),
        onError: (error) => console.log("error :>> ", error),
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await getMBTIResult();
        const resultObj = { nickname, userId, result, visibility: false };
        if (result) {
            mutate(resultObj);
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <ul>
                {targetQuestions.map((test) => {
                    return <TestItem key={test.id} test={test} handleAnswers={handleAnswers} />;
                })}
            </ul>
            <div>
                <button type="form">제출</button>
            </div>
        </form>
    );
};

export default Test;
