import React from "react";
import { MBTIDESC } from "../../constants";
import useTestResultPage from "../../hooks/useTestResultPage";

const skeletonMBTI = {
    userId: "",
    nickname: "",
    result: "",
};

const TestResultItem = ({ mbti = skeletonMBTI }) => {
    const { userId, testid, handleDelete, handleToggle } = useTestResultPage();
    return (
        <div className="border-solid border-[#644d21] border-8  rounded-[20px] bg-[#4A655A] flex flex-col w-[600px] p-5">
            <h1 className="text-white font-[600]">결과: {mbti.result}</h1>
            <h3 className="text-white font-[600] w-[250px] truncate">유저아이디: {mbti.userId}</h3>
            <h3 className="text-white font-[600] w-[250px] truncate">닉네임: {mbti.nickname}</h3>
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
};

export default TestResultItem;
