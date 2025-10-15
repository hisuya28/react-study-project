// '{ count: number; setCount: Dispatch<SetStateAction<number>>; }' 형식은
// 'IntrinsicAttributes' 형식에 할당할 수 없습니다.
// 'IntrinsicAttributes' 형식에 'count' 속성이 없습니다.ts(2322)
// 해당 에러는 props 타입으로 사용하면 됨

// 첫 번째 방법은 setCount() 함수를 props로 전달해
// 자식 컴포넌트에서 직접 setCount((count) => count + 1) 상태 변경

// 즉, 자식 컴포넌트에서 상태 변경

import { Dispatch, SetStateAction } from "react"

export default function Count({
    count, setCount
}:{count: number; setCount: Dispatch<SetStateAction<number>>;}){

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count => count + 1)}>증가</button>
        </>
    );
}