import { useNavigate } from "react-router-dom";

const TestIcon = ({ test, idx }) => {
    const navigate = useNavigate();

    const goToResultPage = (e) => {
        e.stopPropagation();
        navigate(`/testresult/${test.testTitle}`);
    };

    return (
        <li
            className="border-solid border-black border-2 bg-white p-2 rounded-xl cursor-pointer hover:bg-slate-200"
            onClick={() => navigate(`/test/${idx}`)}
        >
            <h2 className="text-center content-center text-xl pb-2 border-solid  border-gray-400 border-b-2">
                {test.testTitleKR}
            </h2>
            <h3 className="text-center content-center text-lg pb-2 border-solid  border-gray-400 border-b-2">
                {test.testDesc}
            </h3>
            <p
                className="text-center content-center text-lg m-1 p-1 rounded-xl hover:bg-slate-400"
                onClick={(e) => goToResultPage(e)}
            >
                테스트 결과목록
            </p>
        </li>
    );
};

export default TestIcon;
