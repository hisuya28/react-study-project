// 인터페이스로 props 타입 분리 (현재는 파일로 분리)
// interface UserProps {
//     userObj: {name: string, age: number;};
//     clickHandler: () => void;
// }

// 매개변수에 복잡한 값 대신 위의 인터페이스 사용
export default function User(props: UserProps) {

    // 함수 내부에서의 구조 분해 할당
    const {
        userObj: {name, age},
        clickHandler,
    } = props;
    
    return (
        <>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <button onClick={clickHandler}>클릭</button>
        </>
    );
}

// 전달한 props의 타입을 모를 때 VSCode의 오류 메시지를 활용해야 함
// 오류 메시지가 작동하려면 
// 1. 자식 컴포넌트가 존재
// 2. props 매개변수가 없는 상태여야 함