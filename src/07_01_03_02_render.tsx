import Login from './components/Login';
import Logout from './components/Logout';

// and 연산자를 사용한 조건부 렌더링
// 2. 컴포넌트 렌더링 하기
// jsx 요소 뿐만 아니라 컴포넌트 전체를
// 조건부로 렌더링 할 때 유용

export default function App(){
    const isLogin = true;
    
    return (
        <>
            {isLogin && <Login />}
            {!isLogin && <Logout />}
        </>
    );
}
