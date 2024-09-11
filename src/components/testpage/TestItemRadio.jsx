import React, { useRef } from "react";

const TestItemRadio = ({ idx, test, handleAnswers, option }) => {
    const radioRef = useRef();
    const isChecked = radioRef?.current?.checked;
    return (
        <div
            className={`flex flex-row gap-2 w-40 h-10 items-center border-solid ${
                isChecked ? "border-black bg-slate-200" : "border-gray-300"
            } border-2 rounded-xl px-2 cursor-pointer hover:bg-slate-100`}
            onClick={() => {
                handleAnswers(test.id - 1, option), (radioRef.current.checked = true);
            }}
        >
            <input
                type="radio"
                name={`${test.id}`}
                id={`${test.id}-${idx}`}
                onChange={() => handleAnswers(test.id - 1, option)}
                ref={radioRef}
            />
            <label htmlFor={`${test.id}-${idx}`}>{option}</label>
        </div>
    );
};

export default TestItemRadio;
