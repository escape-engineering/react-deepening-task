import TestItem from "../components/testpage/TestItem";
import { useUserInfo } from "../zustand/useAuthStore";
import useTestPage from "../hooks/useTestPage";

const Test = () => {
    const { userId, nickname } = useUserInfo();
    const { handleSubmit, targetQuestions, handleAnswers } = useTestPage();

    return (
        <form onSubmit={(e) => handleSubmit(e, nickname, userId)}>
            <ul>
                {targetQuestions.queList.map((test, idx) => {
                    return <TestItem key={test.id} test={test} idx={idx + 1} handleAnswers={handleAnswers} />;
                })}
            </ul>
            <div className="flex justify-center items-center">
                <button
                    type="form"
                    className="m-5 border-solid border-gray-400 border-2 rounded-xl w-40 h-10 hover:bg-gray-300"
                >
                    제출
                </button>
            </div>
        </form>
    );
};

export default Test;
