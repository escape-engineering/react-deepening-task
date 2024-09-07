import { questions } from "../data/questions";
import TestItem from "../components/testpage/TestItem";
import { useState } from "react";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { postMyTestResult } from "../apis/testApi";
import { useUserInfo } from "../zustand/useAuthStore";
import { useNavigate } from "react-router-dom";

const Test = () => {
    const [answers, setAnswers] = useState(Array.from({ length: questions.length }));
    const navigate = useNavigate();
    const { userId } = useUserInfo();

    const handleAnswers = (idx, selected) => {
        setAnswers([...answers].with(idx, selected));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isAnswersSelected = answers.every((answer) => answer != undefined);
        if (!isAnswersSelected) {
            alert("모든 문항에 답을 해주세요!");
            return;
        }
        const result = calculateMBTI(answers);
        try {
            const data = await postMyTestResult(result, userId);
            console.log("data :>> ", data);
            navigate("/testresult", { state: result });
        } catch (error) {
            console.log("error :>> ", error);
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <ul>
                {questions.map((test) => {
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
