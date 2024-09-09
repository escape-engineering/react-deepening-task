import TestItemRadio from "./TestItemRadio";

const TestItem = ({ test, handleAnswers, idx }) => {
    return (
        <li className="my-4 flex flex-col gap-2">
            <p>{`${idx}. ${test.question}`}</p>
            <fieldset className="flex flex-row justify-start gap-4">
                {test.options.map((option, idx) => {
                    return (
                        <TestItemRadio
                            key={`question-${idx}-${test.id}`}
                            idx={idx}
                            test={test}
                            handleAnswers={handleAnswers}
                            option={option}
                        />
                    );
                })}
            </fieldset>
        </li>
    );
};

export default TestItem;
