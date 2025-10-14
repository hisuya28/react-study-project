import { useReducer } from "react";
import { counterReducer } from "./reducer/counterReducer";

// useReducer hook 사용

// state은 이전 상태 값
// action은 상태 변경할 때 참조할 정보가 담긴 객체
// action.type 값에 따라 상태 변경 로직을 실행함
// default 문은 예외 처리

// function counterReducer(state: number, action: {type: string}){
//     switch (action.type){
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         case 'RESET':
//             return state = 0;
//         default:
//             throw new Error(`Unhandled action type: ${action.type}`);
//     }
// }

// count는 초기값 0인 변수
// countDispatch는 액션 발생 함수

export default function App(){

    const [count, countDispatch] = useReducer(counterReducer, 0);
        return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={() => countDispatch({type: 'DECREMENT'})}>감소</button>
            <button onClick={() => countDispatch({type: 'RESET'})}>초기화</button>
            <button onClick={() => countDispatch({type: 'INCREMENT'})}>증가</button>
        </>
    );
}