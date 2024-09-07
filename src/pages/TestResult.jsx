import { useLocation } from "react-router-dom";
import { MBTIDESC } from "../constants";
import { deleteTestResult, getTargetTestResults, toggleTestResult } from "../apis/testApi";
import { useEffect, useState } from "react";
import { useUserInfo } from "../zustand/useAuthStore";

const TestResult = () => {
    const location = useLocation();
    const testedMbti = location?.state;
    const { userId } = useUserInfo();
    console.log("location :>> ", location);
    console.log("testedMbti :>> ", testedMbti);

    const [userMBTIs, setUserMBTIs] = useState([]);

    const getAllMbtiData = async () => {
        try {
            const data = await getTargetTestResults();
            setUserMBTIs(data.filter((el) => el.userId == userId || el.visibility));
        } catch (error) {
            console.log("error :>> ", error);
        }
    };

    useEffect(() => {
        getAllMbtiData();
    }, []);

    //TODO - tanstackQuery로 바꾸기 적합해 보임
    const toggleTestData = async (testId, testObj) => {
        const newTestObj = { ...testObj, visibility: !testObj.visibility };
        try {
            const data = await toggleTestResult(testId, newTestObj);
            console.log("data :>> ", data);
            setUserMBTIs([...userMBTIs].map((el) => (el.id == testId ? { ...el, visibility: !el.visibility } : el)));
        } catch (error) {
            console.log("error :>> ", error);
        }
    };

    const deleteTestData = async (testId) => {
        try {
            const data = await deleteTestResult(testId);
            console.log("data :>> ", data);
            setUserMBTIs([...userMBTIs].filter((el) => el.id != testId));
        } catch (error) {
            console.log("error :>> ", error);
        }
    };

    return (
        <div>
            {testedMbti ? (
                <div>
                    <h1>{testedMbti}</h1>
                    <p>{MBTIDESC[testedMbti]}</p>
                </div>
            ) : (
                <></>
            )}
            {userMBTIs?.map((mbti, idx) => {
                return (
                    <div key={`${mbti.id}`}>
                        <h1>{mbti.result}</h1>
                        <h3>{mbti.userId}</h3>
                        <p>{MBTIDESC[mbti.result]}</p>
                        {mbti.userId == userId ? (
                            <div>
                                <button
                                    onClick={() => toggleTestData(mbti.id, mbti)}
                                    className="border-solid border-red-400 border-2"
                                >
                                    {mbti.visibility ? "비공개" : "공개"}
                                </button>
                                <button
                                    onClick={() => deleteTestData(mbti.id)}
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
