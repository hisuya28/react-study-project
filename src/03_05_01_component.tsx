import Button from './components/button';

// 이벤트 핸들러
// 위의 button 컴포넌트는 onFive를 props로 받아 onClick 이벤트와 연결

export default function _03_05_01_Component() {

    return (
        <>
            {/* <button onClick={() => { alert('button clicked!')}}>click</button> */}
            <Button onFive={() => alert('five')} />
        </>
    );
};

