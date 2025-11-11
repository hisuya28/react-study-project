import { useState } from "react";

// useState hook 여러 번 사용하기
// hook은 한 번에 하나의 상태 값만 관리할 수 있음
// 따라서 여러 개의 상태 값이 필요하다면
// useState를 여러 번 호출해 따로 정의해야 함

export default function App(){

    // 여러 개라면 이런 식으로 정의할 수 있지만
    // const [name, setName] = useState(null);
    // const [age, setAge] = useState(null);
    // const [gender, setGender] = useState(null);

    // 만약 상태 개수가 많아지면 코드가 복잡해지므로
    // 객체로 묶어 관리하는 방법으로 사용
    // const [formState, setFormState] = useState({
    //     name: '',
    //     age: 0,
    //     gender: '',
    // });

    return (
        <>
        </>
    );

}