// 인라인 스타일의 첫 번째 예제
// 리액트에서 가장 전통적인 방법은 인라인 스타일
// 인라인 스타일은 JSX 요소의 style 속성에
// 직접 스타일 객체를 지정하는 방식

// 첫 번째 예제는 스타일 객체를 변수로 분리해서 사용하는 방식

export default function App(){
    const style = {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '16px',
        padding: '10px',
    };

    return(
        <>
            <h1 style={style}>inline Style</h1>
        </>
    );
}