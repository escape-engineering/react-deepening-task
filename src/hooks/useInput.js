import { useState } from "react";

const useInput = () => {
    const [text, setText] = useState("");
    const handleInputText = (e) => {
        setText(e.target.value);
    };

    return [text, handleInputText];
};

export default useInput;
