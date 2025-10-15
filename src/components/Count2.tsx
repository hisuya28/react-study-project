// '{ count: number; setCount: Dispatch<SetStateAction<number>>; }' 형식은
// 'IntrinsicAttributes' 형식에 할당할 수 없습니다.
// 'IntrinsicAttributes' 형식에 'count' 속성이 없습니다.ts(2322)
// 해당 에러는 props 타입으로 사용하면 됨

// 두 번째 방법은 increment() 함수를 부모 컴포넌트에서 정의하고
// 해당 함수를 자식 컴포넌트로 전달해 setCount()를 실행

// 즉, 부모 컴포넌트(04_04_01_02_state)에서 상태 변경

export default function Count({
    count, increment,
}:{count: number; increment: () => void;}){

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={increment}>증가</button>
        </>
    );
}