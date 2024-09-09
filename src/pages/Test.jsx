import { questions } from "../data/questions";
import TestItem from "../components/testpage/TestItem";
import { useState } from "react";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { useUserInfo } from "../zustand/useAuthStore";
import { useParams } from "react-router-dom";
import { usePostMyTestMutation } from "../queries/useCustomQuery";

const Test = () => {
    const { testid } = useParams();
    const targetQuestions = questions[testid];
    const { userId, nickname } = useUserInfo();
    const { mutate } = usePostMyTestMutation(targetQuestions.testTitle);
    const [answers, setAnswers] = useState(Array.from({ length: targetQuestions.queList.length }));

    const handleAnswers = (idx, selected) => {
        setAnswers([...answers].with(idx, selected));
    };

    const transformResult = async () => {
        const isAnswersSelected = answers.every((answer) => answer != undefined);
        if (!isAnswersSelected) {
            alert("모든 문항에 답을 해주세요!");
            return;
        }
        const result = calculateMBTI(testid, answers);
        return result;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await transformResult();
        const resultObj = { nickname, userId, result, visibility: false };
        if (result) {
            mutate({ testTitle: targetQuestions.testTitle, resultObj });
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <ul>
                {targetQuestions.queList.map((test) => {
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
