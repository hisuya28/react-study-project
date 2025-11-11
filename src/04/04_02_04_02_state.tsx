import { useState } from "react";

// useState hook 사용 시 주의사항

export default function App(){

    const [count, setCount] = useState(0);

    const clickHandler = () => {
        // const [count, setCount] = useState(0); // 오류 발생
        setCount(count + 1);
    };

    // useState 같은 리액트 hook은 반드시
    // 함수형 컴포넌트 내부의 최상위에서 호출해야 함
    // 최상위라는 건 if, for, 함수 정의, 이벤트 핸들러 등
    // 어떤 블록 안에도 포함되지 않는 영역을 뜻함
    // 위의 오류 발생은 이벤트 핸들러 내부에서 호출하기 때문.

    return (
        <>
            <div>
                <h1>count : {count}</h1>
                <button onClick={clickHandler}>변경</button>
            </div>
        </>
    );

}