import React from "react";

// 이것은 html처럼 보이지만 JSX 문법임.

function _02_JSX(){

    const a = 20;
    return (
        <>
        <div>Hello React!</div>
        <div className="box"></div> {/* 태그 속성은 camelCase으로 작성*/}
        <h1>result : {10 + 20}</h1>
        <h1>{10 < a ? "10이 더 작다" : "20이 더 크다"}</h1>
        <h1 style={{
            color: "red",
            backgroundColor: "lightgray"
        }}>Styled Text</h1> {/* background-color -> backgroundColor로 표기 */}
        </>
    )
}

export default _02_JSX;