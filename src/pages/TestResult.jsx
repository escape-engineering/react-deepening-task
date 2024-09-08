import { useLocation } from "react-router-dom";
import { MBTIDESC } from "../constants";
import { deleteTestResult, getTargetTestResults, testInstance, toggleTestResult } from "../apis/testApi";
import { useEffect, useState } from "react";
import { useUserInfo } from "../zustand/useAuthStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const TestResult = () => {
    const location = useLocation();
    const testedMbti = location?.state;
    const { userId } = useUserInfo();
    const queryClient = useQueryClient();

    const getAllTestResults = async () => {
        const response = await testInstance.get("/testResults");
        const filteredData = response.data.filter((el) => el.userId == userId || el.visibility);
        return filteredData;
    };

    const {
        data: userMBTIs,
        isLoading: userMBTIsLoading,
        isError: userMBTIsError,
    } = useQuery({
        queryKey: ["MBTIS"],
        queryFn: getAllTestResults,
    });

    const toggleTestResult = async (testObj) => {
        await testInstance.patch(`/testResults/${testObj.id}`, testObj);
    };

    const toggleMutation = useMutation({
        mutationFn: toggleTestResult,
        onSuccess: () => queryClient.invalidateQueries(["MBTIS"]),
        onError: (error) => console.log("error :>> ", error),
    });

    const handleToggle = (testObj) => {
        const newTestObj = { ...testObj, visibility: !testObj.visibility };
        toggleMutation.mutate(newTestObj);
    };

    const deleteTestResult = async (testId) => {
        await testInstance.delete(`/testResults/${testId}`);
    };

    const deleteMutation = useMutation({
        mutationFn: deleteTestResult,
        onSuccess: () => queryClient.invalidateQueries(["MBTIS"]),
        onError: (error) => console.log("error :>> ", error),
    });

    const handleDelete = (testId) => {
        deleteMutation.mutate(testId);
    };

    if (userMBTIsLoading) return <div>Loading...</div>;
    if (userMBTIsError) return <div>에러 발생!</div>;

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
                        <h1>결과: {mbti.result}</h1>
                        <h3>유저아이디: {mbti.userId}</h3>
                        <h3>닉네임: {mbti.nickname}</h3>
                        <p>상세설명: {MBTIDESC[mbti.result]}</p>
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
