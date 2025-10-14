import React from "react";
import User from './components/User02'

// props 객체 타입 알아내기
// {}에 데이터 개수 제한없이 전달할 수 있음
// 다만 데이터가 많아지면 복잡하므로
// 객체나 배열로 묶어 한 번에 전달하는 게 나음

export default function _03_04_02_Component() {

    const userObj1 = {
        name: '철수',
        age: 20,
    };

    const userObj2 = {
        name: '영수',
        age: 18,
    };

    // 버튼 클릭 시 props를 통해 자식 컴포넌트에 전달
    // 클릭핸들러 함수 선언
    const clickHandler = () => {
        console.log('clicked');
    }

    return (
        <>
            <User userObj={userObj1} clickHandler={clickHandler}/>
            <User userObj={userObj2} clickHandler={clickHandler}/>
        </>
    );
};

