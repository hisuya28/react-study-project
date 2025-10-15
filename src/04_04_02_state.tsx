import CountDisplay from './components/CountDisplay';
import CountButton from './components/CountButtons';
import { useState } from 'react';

// 상태 끌어올리기
// 여러 컴포넌트에서 공유해야 하는 상태를
// 가장 가까운 공통 부모 컴포넌트로 이동시키는 과정
// 즉, 부모 컴포넌트가 상태를 중앙에서 관리하고
// 자식 컴포넌트들은 prop를 통해 상태값을 전달받기

export default function App(){

    // 자식 CountDisplay 컴포넌트에 props 전달
    const [count, setCount] = useState(0);

    // 자식 CountButtons 컴포넌트에 props 전달
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    
    return (
        <>
            {/* 기존은 자식 컴포넌트들이 독립적이므로 동작X */}
            {/* <CountDisplay /> */}
            {/* <CountButton /> */}

            {/* 자식 컴포넌트에 매개변수 값을 통해 props 전달*/}
            <CountDisplay count={count}/>
            <CountButton increment={increment} decrement={decrement} reset={reset}></CountButton>
        </>
    );
}

// 기존에는 버튼 클릭 시 CountButtons 컴포넌트만 정상적으로 동작되고
// CountDisplay 컴포넌트는 렌더링이 되지 않음
// 이유는 CountDisplay 컴포넌트와 CountButtons 컴포넌트가
// 서로 다른 count 상태를 독립적으로 가지고 있기 때문
// 버튼을 클릭하면 count 값만 변경되고
// 여기는 useState(0)에서 선언한 초깃값만 보여줘서 화면에 변화가 없음

// 따라서 여러 컴포넌트에서 동일한 상태를 공유해야 할 경우
// 공통 부모 컴포넌트(04_04_02_State)로 상태를 끌어올려야 함
// 리액트에서는 데이터가 항상 부모 -> 자식 방향으로만 전달돼서
// 자식 컴포넌트끼리 상태를 공유하려면 공통 부모에 정의하고
// 그 상태를 props를 통해 자식에게 전달해야 함

// 부모 컴포넌트에서 count 상태를 관리하고
// 자식 컴포넌트들은 각각 props를 통해 상태값을 전달받아 구성