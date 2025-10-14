import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// 컴포넌트는 function 키워드로 정의하고
// JSX를 return 문 안에 작성함.

function _03_03_Component(){

    return (
        <>
            <Header /> {/* Header 컴포넌트로부터 불러옴*/}
            <Main /> {/* Main 컴포넌트로부터 불러옴*/}
            <Footer /> {/* Footer 컴포넌트로부터 불러옴*/}
        </>
    )
}

// 컴포넌트를 내보낼 때 export 키워드를 사용함
// dafault 키워드를 사용하면 {} 없이 사용할 수 있음
export default _03_03_Component;