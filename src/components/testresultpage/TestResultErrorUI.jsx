import React from "react";

const TestResultErrorUI = ({ refetch, goToHome }) => {
    return (
        <div>
            <p>서버가 아파요 ㅠㅠ</p>
            <div>
                <button onClick={() => refetch()}>서버 연결 재시도</button>
                <button onClick={goToHome}>홈으로 돌아가기</button>
            </div>
        </div>
    );
};

export default TestResultErrorUI;
