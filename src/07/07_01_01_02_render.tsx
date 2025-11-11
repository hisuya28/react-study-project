import Logout from '../components/Logout';

// if문은 jsx 표현식 내부에서 직접 사용할 수 없음
// 그래서 조건에 따라 변수에 서로 다른 jsx 요소에 할당한 뒤
// jsx 표현식 내부에서 그 변수를 사용하는 방식

export default function App(){
    const isLogin = false;
    let message;

    if(isLogin){
        message = '환영합니다!';
    }else{
        message = <Logout />;
    }

    return(
        <>
            <h1><>{message}</></h1>
        </>
    );
}
