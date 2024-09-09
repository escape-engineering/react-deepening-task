import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="border-solid border-red-400 border-2">
            <h1>너는 뭐가 문제인거니?</h1>
            <ul className="flex flex-row gap-5">
                {questions.map((test, idx) => {
                    return (
                        <li
                            key={`${test.testTitle}-${idx}`}
                            className="border-solid border-black border-2"
                            onClick={() => navigate(`/test/${idx}`)}
                        >
                            <h2>{test.testTitleKR}</h2>
                            <h3>{test.testDesc}</h3>
                        </li>
                    );
                })}
                {/* <li className="border-solid border-black border-2" onClick={() => navigate("/test/1")}>
                    MBTI 테스트
                </li>
                <li className="border-solid border-black border-2" onClick={() => navigate("/test/2")}>
                    코딩 성향 테스트
                </li> */}
            </ul>
        </div>
    );
};

export default Home;
