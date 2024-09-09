import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="rounded-3xl bg-blue-100 p-3 flex flex-row flex-wrap gap-10 justify-center items-center">
            <h1 className="text-3xl font-bold pt-2 pb-4 border-solid  border-gray-400 border-b-2 w-11/12 text-center content-center py-4 ">
                간단한 테스트로 내 성격 알아보기
            </h1>
            <ul className="flex flex-row gap-5">
                {questions.map((test, idx) => {
                    return (
                        <li
                            key={`${test.testTitle}-${idx}`}
                            className="border-solid border-black border-2 bg-white p-2 rounded-xl cursor-pointer hover:bg-slate-200"
                            onClick={() => navigate(`/test/${idx}`)}
                        >
                            <h2 className="text-center content-center text-xl pb-2 border-solid  border-gray-400 border-b-2">
                                {test.testTitleKR}
                            </h2>
                            <h3 className="text-center content-center text-lg">{test.testDesc}</h3>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Home;
