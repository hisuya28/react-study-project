import { useState } from 'react';

export default function Input2(){
    const [value, setValue] = useState('');
    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    // input[type='password']
    const [password, setPassword] = useState('');
    const handlerChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    // input[type='date']
    const [date, setDate] = useState('');
    const handlerChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    }

    return (
        <>
            <form>
                <h1>ID: {value} / Password: {password} / Date: {date}</h1>
                <input type='text' value={value} onChange={handlerChange} />
                <input type='password' value={password} onChange={handlerChangePassword} />
                <input type='date' value={date} onChange={handlerChangeDate} />
            </form>  
        </>
    );
}