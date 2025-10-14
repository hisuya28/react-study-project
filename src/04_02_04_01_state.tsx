import { useState } from "react";

// useState hook 사용 시 주의사항

export default function App(){

    // const [name, setName] = useState(null);
    // const [age, setAge] = useState(null);
    // const [gender, setGender] = useState(null);
    const [name, setName] = useState<string | null>(null);
    const [age, setAge] = useState<number | null>(null);
    const [gender, setGender] = useState<string | null>(null);
    const clickHandler = () => {
        setName('Mike'); // 타입 오류 발생
        setAge(23); // 타입 오류 발생
        setGender('female'); // 타입 오류 발생

        // 즉, 타입 오류 발생하는 이유는 초깃값이
        // null로 전달했기 때문.
        // 오류 방지하려면 <원하는 타입 | null>로 지정해야 함
    };

    return (
        <>
            <div>
                <p>이름 : {name}</p>
                <p>나이 : {age}</p>
                <p>성별 : {gender}</p>
                <button onClick={clickHandler}>변경</button>
            </div>
        </>
    );

}