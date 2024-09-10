import { useParams } from "react-router-dom";
import { questions } from "../data/questions";
import { usePostMyTestMutation } from "../queries/useCustomQuery";
import { useState } from "react";
import { calculateMBTI } from "../utils/mbtiCalculator";

const useTestPage = () => {
    const { testid } = useParams();
    const targetQuestions = questions[testid];
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

    const handleSubmit = async (e, nickname, userId) => {
        e.preventDefault();
        const result = await transformResult();
        const resultObj = { nickname, userId, result, visibility: false };
        if (result) {
            mutate({ testTitle: targetQuestions.testTitle, resultObj });
        }
    };

    return { handleSubmit, targetQuestions, handleAnswers };
};
export default useTestPage;
