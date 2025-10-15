import { useState } from "react";
import Count from './components/Count.tsx';

// 상태 관리 패턴
// 실제로 어떻게 활용하는 지, 실무에서 자주 쓰는 방법

// useState hook 기준이지만 useReducer hook도 동일하게 가능

export default function App(){

    const [count, setCount] = useState(0);
    
    return (
        <>
            <Count count={count} setCount={setCount} />
        </>
    );
}