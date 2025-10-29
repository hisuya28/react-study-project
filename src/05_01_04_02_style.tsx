import './App.css'
import classNames from 'classnames';
import Child from './components/Child';

// classnames 라이브러리
// 글로벌 스타일에서 사용하기
// 버튼에 적용할 기본 스타일인 .btn 클래스와
// 조건부로 적용할 .is-active 클래스를 정의
// 해당 조건값에 따라 클래스 적용

export default function App(){
    const isActive = true;

    return(
        <>
            <button className={classNames('btn',{'is-active':isActive})}>App Button</button>
            <Child />
        </>
    );
}

// 해당 라이브러리 사용법 (false, null, undefined, 0, '' 등 무시)
// classNames('btn', 'primary') -> 출력 : btn primary
