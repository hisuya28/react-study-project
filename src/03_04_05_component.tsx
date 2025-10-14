import React from "react";
import User from './components/User04'

// 리액트에서는 컴포넌트는 기본적으로 빈 태그 사용
// 이러한 형태를 사용하면 컴포넌트 안에 포함된
// 내용들을 특별한 props 속성으로 취급하며 이는 children임

export default function _03_04_05_Component() {

    // User 컴포넌트를 시작 태그와 종료 태그 사이에
    // 자식 태그까지 내용을 포함하는 방식으로 사용
    return (
        <>
            <User title='User Component'>
                <p>James</p>
                <p>20</p>
                <p>male</p>
            </User>
        </>
    );
};

