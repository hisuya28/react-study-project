// 인라인 스타일의 두 번째 예제
// 리액트에서 가장 전통적인 방법은 인라인 스타일
// 인라인 스타일은 JSX 요소의 style 속성에
// 직접 스타일 객체를 지정하는 방식

// 두 번째 예제는 JSX 안에서 style 속성에 직접 객체를 작성하는 방식

export default function App(){
    return(
        <>
            <h1 style={{
                backgroundColor: 'blue',
                color: 'white',
                fontSize: '16px',
                padding: '10px',
            }}>inline Style</h1>
        </>
    );
}