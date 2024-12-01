import React from 'react';

interface InputProps {

    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const Input: React.FC<InputProps> = ({ label, type, name, value, onChange }) => (

    <div>

        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} />
    </div>

);

export default Input