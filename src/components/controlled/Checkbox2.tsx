import { useState } from 'react';

// 체크박스를 여러 개 관리해야 할 때 객체 형태의 상태로 사용

export default function Checkbox2() {
    const [formState, setFormState] = useState({
        agree1: false, agree2: false, agree3: false,
    });

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((formState) => ({
            ...formState, [event.target.name]: event.target.checked,
        }));
    };

    return (
        <form>
            <input type='checkbox' id='ag1' name='agree1' checked={formState.agree1} onChange={handleCheckboxChange}/>
            <label htmlFor='ag1'>동의({formState.agree1 ? '선택됨' : '미선택'})</label>
            <input type='checkbox' id='ag2' name='agree2' checked={formState.agree2} onChange={handleCheckboxChange}/>
            <label htmlFor='ag2'>동의({formState.agree2 ? '선택됨' : '미선택'})</label>
            <input type='checkbox' id='ag3' name='agree3' checked={formState.agree3} onChange={handleCheckboxChange}/>
            <label htmlFor='ag3'>동의({formState.agree3 ? '선택됨' : '미선택'})</label>
        </form>
    );
}