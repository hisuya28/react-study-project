export default function _04_01_State() {

    let name = '철수';
    const age = 20;
    const nameChange = () => {
        name = '영희';
        console.log(name);
    };

    return (
        <>
            <div>
                <p>{name}</p>
                <p>{age}</p>
                <button onClick={nameChange}>value change</button>
            </div>
        </>
    );
};

// 결과는 name 값이 철수에서 영희로 변경되지 않음
// 이유는 컴포넌트가 리렌더링이 되지 않기 때문에
// 데이터가 변경되더라도 리액트가 변화를 감지 못함
// 즉, State로 상태를 관리해야 함

