import { useRef } from "react";


export const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        if (!inputRef.current) {
            console.log('No input element found');
            return;
        }

        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Focus me" />

            <button onClick={handleButtonClick}>Focus input</button>
        </div>
    )
}