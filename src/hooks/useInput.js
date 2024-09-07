import { useState } from "react";

const useInput = (initialValue = "") => {
    const [text, setText] = useState(initialValue);
    const handleInputText = (e) => {
        setText(e.target.value);
    };

    return [text, handleInputText];
};

export default useInput;
