import React from "react";

const TestItem = ({ test, handleAnswers }) => {
    return (
        <li className="my-4">
            <p>{test.question}</p>
            <fieldset>
                {test.options.map((option, idx) => {
                    return (
                        <div key={`question-${idx}-${test.id}`}>
                            <input
                                type="radio"
                                name={`${test.id}`}
                                id={`${test.id}-${idx}`}
                                onChange={() => handleAnswers(test.id - 1, option)}
                            />
                            <label htmlFor={`${test.id}-${idx}`}>{option}</label>
                        </div>
                    );
                })}
            </fieldset>
        </li>
    );
};

export default TestItem;
