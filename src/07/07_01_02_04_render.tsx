import Login from '../components/Login';

// 삼항 연산자를 사용한 조건부 렌더링
// 4. 동적으로 props 전달하기
// jsx 내부 뿐만 아니라 컴포넌트에 전달하는 props 값도 동적 제어 가능

export default function App(){
    // const isAdmin = true;
    // const isEditable = true;
    
    return (
        <Login 
            // role={isAdmin ? 'admin' : 'user'}
            // permissions = {isAdmin ? ['read', 'write', 'delete'] : ['read']}
            // editable = {isEditable ? true : false}
        />
    );
}
