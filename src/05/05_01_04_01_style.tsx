import classNames from 'classnames';

// classnames 라이브러리
// 글로벌 스타일이나 css 모듈을 사용할 때 클래스 이름을
// 조건부로 적용해야 하는 경우가 많음
// 그래서 classnames 라이브러리를 사용함
// 해당 라이브러리는 리액트를 포함한 js 프레임워크에서 css 클래스 이름을
// 동적으로 조합하고 관리할 수 있게 도와주는 라이브러리

// npm i classnames 명령어 입력하여 라이브러리 설치

export default function App(){
    const btnClass = classNames('btn', 'primary');
    console.log(btnClass);

    return(
        <>
        </>
    );
}

// 해당 라이브러리 사용법 (false, null, undefined, 0, '' 등 무시)
// classNames('btn', 'primary') -> 출력 : btn primary
