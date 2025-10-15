// import { useState } from 'react';

// 원래는 매개변수가 빈칸이었으나 부모로부터 props를 통해 전달 받아야 함
export default function CountDisplay({count} : {count: number}) {
    return <h1>Count: {count}</h1>
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