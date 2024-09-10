import { questions } from "../data/questions";
import TestIcon from "../components/home/TestIcon";

const Home = () => {
    return (
        <div className="rounded-3xl bg-blue-100 p-3 flex flex-row flex-wrap gap-10 justify-center items-center">
            <h1 className="text-3xl font-bold pt-2 pb-4 border-solid  border-gray-400 border-b-2 w-11/12 text-center content-center py-4 ">
                간단한 테스트로 내 성격 알아보기
            </h1>
            <ul className="flex flex-row gap-5">
                {questions.map((test, idx) => {
                    return <TestIcon key={`${test.testTitle}-${idx}`} test={test} idx={idx} />;
                })}
            </ul>
        </div>
    );
};

export default Home;
