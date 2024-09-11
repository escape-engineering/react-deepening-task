import TestResultErrorUI from "../components/testresultpage/TestResultErrorUI";
import TestResultItem from "../components/testresultpage/TestResultItem";
import TestResultSkeletonUI from "../components/testresultpage/TestResultSkeletonUI";
import useTestResultPage from "../hooks/useTestResultPage";

const TestResult = () => {
    const { userMBTIsLoading, userMBTIsError, refetch, goToHome, userMBTIs } = useTestResultPage();

    if (userMBTIsLoading) return <TestResultSkeletonUI />;
    if (userMBTIsError) return <TestResultErrorUI refetch={refetch} goToHome={goToHome} />;

    return (
        <div className="flex flex-col justify-center items-center gap-3">
            {userMBTIs.length ? (
                userMBTIs.map((mbti) => {
                    return <TestResultItem key={`${mbti.id}`} mbti={mbti} />;
                })
            ) : (
                <p>공유되는 결과가 없습니다... 테스트를 진행해주세요!</p>
            )}
        </div>
    );
};

export default TestResult;
