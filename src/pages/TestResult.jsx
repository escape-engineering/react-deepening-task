import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MBTIDESC } from "../constants";
import { useUserInfo } from "../zustand/useAuthStore";
import { useDeleteDataMutation, useGetAllResultQuery, useToggleVisibilityMutation } from "../queries/useCustomQuery";

const TestResult = () => {
    const { testid } = useParams();
    console.log("testid :>> ", testid);
    const location = useLocation();
    const testedMbti = location?.state;
    const { userId } = useUserInfo();
    const navigate = useNavigate();

    const {
        data: userMBTIs,
        isLoading: userMBTIsLoading,
        isError: userMBTIsError,
        refetch,
    } = useGetAllResultQuery(testid, userId);

    const toggleMutation = useToggleVisibilityMutation();

    const handleToggle = (testObj) => {
        const newTestObj = { ...testObj, visibility: !testObj.visibility };
        toggleMutation.mutate({ testid: testid, testResultObj: newTestObj });
    };

    const deleteMutation = useDeleteDataMutation();

    const handleDelete = (testResultId) => {
        deleteMutation.mutate({ testid: testid, testResultId: testResultId });
    };

    if (userMBTIsLoading) return <div>Loading...</div>;
    if (userMBTIsError)
        return (
            <div>
                <p>서버가 아파요 ㅠㅠ</p>
                <div>
                    <button onClick={() => refetch()}>서버 연결 재시도</button>
                    <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
                </div>
            </div>
        );

    return (
        <div>
            {testedMbti ? (
                <div>
                    <h1>{testedMbti}</h1>
                    <p>{MBTIDESC[testid][testedMbti]}</p>
                </div>
            ) : (
                <></>
            )}
            {userMBTIs?.map((mbti) => {
                return (
                    <div key={`${mbti.id}`}>
                        <h1>결과: {mbti.result}</h1>
                        <h3>유저아이디: {mbti.userId}</h3>
                        <h3>닉네임: {mbti.nickname}</h3>
                        <p>상세설명: {MBTIDESC[testid][mbti.result]}</p>
                        {mbti.userId == userId ? (
                            <div>
                                <button
                                    onClick={() => handleToggle(mbti)}
                                    className="border-solid border-red-400 border-2"
                                >
                                    {mbti.visibility ? "비공개" : "공개"}
                                </button>
                                <button
                                    onClick={() => handleDelete(mbti.id)}
                                    className="border-solid border-blue-400 border-2"
                                >
                                    삭제
                                </button>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default TestResult;
