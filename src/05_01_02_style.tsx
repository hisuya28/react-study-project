// import './App.css';

// 밑에 있는 모듈 적용하면 경로 에러가 발생하므로 임시로 주석 처리
import './App.module.css';
import Child from './components/Child';

// 또 다른 전통적인 방법은 글로벌 스타일
// 글로벌 스타일은 .css 확장자를 가진 파일에 CSS 코드를 작성하고
// 이를 컴포넌트에서 import해 적용하는 방식 즉, 외부 스타일

export default function App(){
    return(
        <>
            <button className="btn">App Button</button>

            {/* 글로벌 스타일 적용*/}
            <Child />
        </>
    );
}