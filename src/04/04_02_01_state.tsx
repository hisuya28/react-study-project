// 리액트에서는 상태를 관리할 때 hook를 사용
// hook은 함수형 컴포넌트에서 state와 생명주기를 쉽게
// 관리할 수 있게 도와주는 리액트에서 제공하는 함수
// 대표적인 hook은 useState와 useReducer가 있음

// import { useState } from "react";

// const [state, setState] = useState<Type>(initialState);
// state은 상태 값을 저장하는 변수
// setState은 상태를 변경하는 함수
// Type은 타입스크립트의 기본적인 타입 지정

// 제네릭 타입은 특정 타입에 고정되지 않고
// 다양한 타입에서 재사용할 수 있는 제네릭 기능 제공

// 기존에는 숫자용 함수와 문자열용 함수를 만든 예제
// function identityNumber(value: number): number {
//     return value;
// }

// function identityString(value: string): string {
//     return value;
// }

// 제네릭을 사용하면 T라는 제네릭 타입 변수를 통해
// 어떤 타입이든 받을 수 있음
// function identity<T>(value: T): T {
//     return value;
// }

// 제네릭의 장점은 다양한 타입에 유연하게 재사용할 수 있음
// 또한 타입 안정성도 유지할 수 있음
// const [count, setCount] = useState(0); // 타입을 number로 추론
// const [text, setText] = useState('Hello'); // 타입을 string으로 추론

// 다음과 같은 경우에는 제네릭을 반드시 사용해야 함
// const [value, setValue] = useState<number | underfined>();
// const [data, setData] = useState<string | null>(null);

// interface User {
//     name: string;
//     age: number;
// }

// 이 경우에는 name: string, age: number 객체만 받을 수 있음
// const [user, setUser] = useState<User>({name: 'Alice', age: 25});


// 상태 변수
// 리액트에서 컴포넌트의 상태를 관리하기 위해 사용한 변수
// useState hook을 사용해 선언하며 리액트 내부의 값을 감지
// 값이 변경되면 해당 컴포넌트는 자동으로 리렌더링 되면서 업데이트

// 초깃값은 10
// const [state, setState] = useState(10);
// 하지만 count = 10 재할당하면 안됨

// 상태 변경 함수
// useState로 선언한 상태의 변수 값을 변경할 때
// 반드시 setState 상태 변경 함수를 사용해야 함

// 1. 상태 값을 직접 전달하는 방식
// const [count, setCount] = useState<number>(0);
// setCount(1);
// 이 방식은 특정 값으로 덮어쓸 때 유용

// 2. 이전 상태 값을 참조하는 방식
// const [count, setCount] = useState(0); // 초깃값: 0
// const increment = () => {
//     setCount((count) => count + 1); // 이전 값에서 1씩 증가
// }

// 상태 업데이트가 비동기적으로 처리된다면 2번 방식이 안전함

export default function App(){

}
