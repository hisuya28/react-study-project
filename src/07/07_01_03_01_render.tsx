// and 연산자를 사용한 조건부 렌더링
// 1. jsx 요소 렌더링하기
// UI 요소를 렌더링 해야 할 때 && 연산자를 사용하면
// 특정 조건에만 참일 때만 유용

export default function App(){
    const isLogin = true;
    
    return (
        <>
            {isLogin && (
                <>
                    <h1>환영합니다!</h1>
                    <h2>오늘 기분이 어떠세요?</h2>
                </>
            )}

            {!isLogin && (
                <>
                    <h1>로그인해야 합니다.</h1>
                    <h2>아직 회원이 아니신가요?</h2>
                </>
            )}
        </>
    );
}
