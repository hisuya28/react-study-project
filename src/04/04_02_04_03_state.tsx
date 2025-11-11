import { useState } from "react";

// useState hook 사용 시 주의사항

export default function App(){

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const clickHandler = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    };

    // 버튼 클릭 시 setCount 함수가 3번 호출되면서
    // 3씩 증가할 거 같지만 실제로는 1씩 증가함
    // 이유는 리액트의 상태 업데이트 방식 때문인데
    // 여러 상태 변경을 즉시 처리하지 않고
    // 비동기적으로 처리해 렌더링이 끝난 뒤 한꺼번에 적용
    // 이 방식은 일괄 업데이트라고 하며, 성능을 최적화 방식
    // 호출 과정 살펴보면 0 + 1이 세 번 반복되기 때문에
    // 마지막 호출 결과인 1만 적용됨

    const clickHandler2 = () => {
        setCount2((count2) => count2 + 1);
        setCount2((count2) => count2 + 1);
        setCount2((count2) => count2 + 1);
    };

    // 해결법은 상태 변경 함수에 콜백 함수 형태로 사용
    // 콜백 함수는 항상 이전 상태 값을 매개변수로 전달하므로
    // 그 값을 기반으로 새로운 상태를 안전하게 계산 가능

    return (
        <>
            <div>
                <h1>count : {count}</h1>
                <button onClick={clickHandler}>변경</button>
                <h1>count : {count2}</h1>
                <button onClick={clickHandler2}>변경2</button>
            </div>
        </>
    );

}