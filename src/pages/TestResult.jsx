import Modal from "../components/common/Modal";
import TestResultItem from "../components/testresultpage/TestResultItem";
import useTestResultPage from "../hooks/useTestResultPage";

const TestResult = () => {
    const { userMBTIsLoading, userMBTIsError, refetch, goToHome, userMBTIs } = useTestResultPage();

    if (userMBTIsLoading)
        return (
            <>
                <div className="flex flex-col justify-center items-center gap-3">
                    <TestResultItem />
                    <TestResultItem />
                    <TestResultItem />
                    <TestResultItem />
                </div>
                <Modal />
            </>
        );
    if (userMBTIsError)
        return (
            <div>
                <p>서버가 아파요 ㅠㅠ</p>
                <div>
                    <button onClick={() => refetch()}>서버 연결 재시도</button>
                    <button onClick={goToHome}>홈으로 돌아가기</button>
                </div>
            </div>
        );

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
