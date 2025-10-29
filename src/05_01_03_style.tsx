import styles from './App.module.css';
import Child from './components/Child';

// 또 다른 전통적인 방법은 CSS 모듈
// CSS 모듈은 파일 확장자가 module.css로 끝나는 파일에
// 스타일을 작성한 뒤 이를 컴포넌트에서 불러와 사용하는 방식
// 가장 큰 특징은 local scope를 가지며
// 해당 CSS는 특정 컴포넌트에만 적용
// 즉, 컴포넌트마다 스타일을 독립적으로 관리하므로 스타일 충돌 방지
// 또한 클래스 이름이 자동 변환되기 때문에 중복되는 문제도 예방

export default function App(){
    return(
        <>
            <button className={styles.btn}>App Button</button>
            <Child />
        </>
    );
}