import { useState } from "react";

// useState hook 사용하기
// 숫자 상태 count를 정의하고 클릭 시 1씩 증가 예제

export default function App(){
    const [count, setCount] = useState(0);
    const clickHandler = () => {
        
        // setCount(count + 1) 방법도 있지만
        // 콜백 함수 형태로 작성하는 방식이 권장됨
        setCount(count => count + 1);
    }

    return (
        <>
            <h1>count : {count}</h1>
            <button onClick={clickHandler}>증가</button>
        </>
    );

}