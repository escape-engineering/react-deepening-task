import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="border-solid border-red-400 border-2">
            <h1>너는 뭐가 문제인거니?</h1>
            <ul className="flex flex-row gap-5">
                <li className="border-solid border-black border-2" onClick={() => navigate("/test/1")}>
                    MBTI 검사
                </li>
                <li className="border-solid border-black border-2" onClick={() => navigate("/test/2")}>
                    무슨무슨 검사
                </li>
                <li className="border-solid border-black border-2" onClick={() => navigate("/test/3")}>
                    어떤어떤 검사
                </li>
            </ul>
        </div>
    );
};

export default Home;
