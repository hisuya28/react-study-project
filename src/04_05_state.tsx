import { useState } from 'react';
import Count from './components/Count';

// 개발자 도구로 상태 값 확인하기
// 여기 부분은 크게 신경쓸 필요 없음

export default function App(){

    const [count, setCount] = useState(0);
    const increment = () => setCount((count) => count + 1);    
    return <Count count={count} setCount={increment} />;
}

// 크롬 브라우저에서 F12 누른 다음
// 리액트 전용 Components 탭과 Profiler 탭이 표시되어 있음
// Components 탭에서 Count 컴포넌트를 클릭하면
// App 컴포넌트에서 전달한 props 값과 hooks 값을 확인할 수 있음