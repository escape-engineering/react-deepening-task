import { MBTIDESC } from "../constants";
import useTestResultPage from "../hooks/useTestResultPage";

const TestResult = () => {
    const {
        userMBTIsLoading,
        userMBTIsError,
        refetch,
        goToHome,
        userMBTIs,
        userId,
        handleToggle,
        testid,
        handleDelete,
    } = useTestResultPage();

    if (userMBTIsLoading) return <div>Loading...</div>;
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
                    return (
                        <div
                            key={`${mbti.id}`}
                            className="border-solid border-[#644d21] border-8  rounded-[20px] bg-[#4A655A] flex flex-col w-[600px] p-5"
                        >
                            <h1 className="text-white font-[600]">결과: {mbti.result}</h1>
                            <h3 className="text-white font-[600]">유저아이디: {mbti.userId}</h3>
                            <h3 className="text-white font-[600]">닉네임: {mbti.nickname}</h3>
                            <p className="text-white font-[600]">상세설명: {MBTIDESC[testid][mbti.result]}</p>
                            {mbti.userId == userId ? (
                                <div className="flex flex-row justify-end gap-3">
                                    <button
                                        onClick={() => handleToggle(mbti)}
                                        className="border-solid border-[#80622c] border-4 rounded-xl w-40 h-10 hover:bg-[#364d43] text-white font-[600]"
                                    >
                                        {mbti.visibility ? "비공개로 전환" : "공개로 전환"}
                                    </button>
                                    <button
                                        onClick={() => handleDelete(mbti.id)}
                                        className="border-solid border-[#80622c] border-4 rounded-xl w-40 h-10 hover:bg-[#364d43] text-white font-[600]"
                                    >
                                        삭제
                                    </button>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    );
                })
            ) : (
                <p>공유되는 결과가 없습니다... 테스트를 진행해주세요!</p>
            )}
        </div>
    );
};

export default TestResult;
