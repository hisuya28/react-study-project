import { useState } from 'react';

// 하지만 기존 input2에는 여러 입력 요소를 각각 상태로
// 관리하면 코드가 복잡해지고 유지보수가 어려워짐
// 그래서 객체 형태의 생태를 사용해 여러 입력 값을 통합 관리

export default function Input3(){

     const [formState, setFormState] = useState({
        id: '', password: '', date: '',
     })
     
    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((formState) => ({
            ...formState,
            [e.target.name]: e.target.value, 
        }));
    };


    return (
        <>
            <form>
                <h1>ID: {formState.id} / Password: {formState.password} / Date: {formState.date}</h1>
                <input type='text' name='id' value={formState.id} onChange={handlerChange}/>
                <input type='password' name='password' value={formState.password} onChange={handlerChange}/>
                <input type='date' name='date' value={formState.date} onChange={handlerChange}/>
            </form>  
        </>
    );
}