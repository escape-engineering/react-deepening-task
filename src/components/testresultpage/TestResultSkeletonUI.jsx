import TestResultItem from "./TestResultItem";
import Modal from "../common/Modal";

const TestResultSkeletonUI = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-3">
                <TestResultItem />
                <TestResultItem />
                <TestResultItem />
                <TestResultItem />
            </div>
            <Modal />
        </>
    );
};

export default TestResultSkeletonUI;
