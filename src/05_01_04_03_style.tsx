import styles from './App.module.css';
import classNames from 'classnames/bind';
import Child from './components/Child';

// classnames 라이브러리
// CSS 모듈에서 사용하기
// CSS 모듈에서 사용할 때 classnames/bind 패키지를 활용


export default function App(){
    const isActive = true;
    const cx = classNames.bind(styles);

    return(
        <>
            <button className={cx({btn: true,'is-active': isActive})}>App Button</button>
            <Child />   
        </>
    );
}

// 해당 라이브러리 사용법 (false, null, undefined, 0, '' 등 무시)
// classNames('btn', 'primary') -> 출력 : btn primary
