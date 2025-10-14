import React from "react";
import User from './components/User01'

// props 객체는 부모 컴포넌트가 자식 컴포넌트에게 넘겨주는
// 모든 데이터가 담긴 객체임
export default function _03_04_01_Component() {
    return (
        <>
            <User name='철수' age={20}></User>
            <User name='영희' age={18}></User>  
        </>
    );
};

// 데이터는
// {
//     name: '철수',
//     age: 20
// }
// 이런 식으로 자식 컴포넌트는 전달받은 props 객체를
// 함수의 매개변수로 받음.