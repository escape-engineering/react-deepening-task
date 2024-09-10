import { useNavigate } from "react-router-dom";

const TestIcon = ({ test, idx }) => {
    const navigate = useNavigate();
    return (
        <li
            className="border-solid border-black border-2 bg-white p-2 rounded-xl cursor-pointer hover:bg-slate-200"
            onClick={() => navigate(`/test/${idx}`)}
        >
            <h2 className="text-center content-center text-xl pb-2 border-solid  border-gray-400 border-b-2">
                {test.testTitleKR}
            </h2>
            <h3 className="text-center content-center text-lg">{test.testDesc}</h3>
        </li>
    );
};

export default TestIcon;
