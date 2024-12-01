import React from 'react';


interface ButtonProps {

    text: string;
    onClick: () => void;
    type?:'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({text, onClick, type ='button'}) => (

    <button type={type} onClick={onClick}>
        {text}
    </button>

);

export default Button;