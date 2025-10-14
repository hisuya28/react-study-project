// import { useState } from "react";

// useReducer hook 복잡한 상태 관리
// useReducer hook은 리액트에서 상태를 관리하는 또 다른 방법
// 이전 상태와 액션에 따라 새로운 상태를 반환하는 방식
// 상태 변경 로직이 복잡하거나 업데이트가 많으면 적합

// 형식
// const [state, dispatch] = useReducer<Type>(reducer, initialState);
export default function App(){
        return (
        <>
        </>
    );
}

// 리듀서 함수를 작성할 때 기본 형식
// 1. 함수 이름 : 보통 reducer 이름 사용
// 2. 리듀서 함수는 새로운 상태를 반환하므로 상태 변경X
// 3. 반드시 하나의 상태를 반환해야 함
// 4. 모든 경우에 대해 반환해야 하므로 switch문의 default 키워드를 반드시 추가
// 5. 리액트는 상태의 불변성을 원칙하기 때문에
// {...state}처럼 이전 상태를 복사한 뒤 변경하는 방식으로 작성 

// function reducer(state:StateType, action:ActionType){
//     switch (action.type) {
//         case 'ACTION_TYPE_1':
//             return { ...state, 변경_값} // 새로운 상태 반환
//         case 'ACTION_TYPE_2':
//             return { ...state, 변경_값} // 새로운 상태 반환
//         default:
//             return state; // 변경이 없을 경우 이전 상태 유지
        
//     }
// }

// 리듀서 함수 예제
// function reducer(state: number, action: {type: string}){
//     switch (action.type){
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state + 1;
//         default:
//             return state;
//     }
// }