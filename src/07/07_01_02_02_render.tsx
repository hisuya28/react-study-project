import Login from '../components/Login';
import Logout from '../components/Logout';

// 삼항 연산자를 사용한 조건부 렌더링
// 2. 컴포넌트 렌더링하기
// 이 방식은 상태에 따라 UI 전체를 다르게 구성해야 할 때 유용

export default function App(){
    const isLogin = true;
    const message = isLogin ? <Login /> : <Logout />
    // const message = isLogin? (
    //     <>
    //         <h1>환영합니다!</h1>
    //         <h2>오늘 기분은 어떠세요?</h2>
    //     </>
    // ) : (
    //     <>
    //         <h1>로그인해야 합니다.</h1>
    //         <h2>아직 회원이 아닌가요?</h2>
    //     </>
    // );

    return <>{message}</>;
}
