// 삼항 연산자를 사용한 조건부 렌더링
// 3. 동적으로 스타일 적용하기
// 삼항 연산자는 jsx에서 상태의 값에 따라 스타일 적용에 유용

export default function App(){
    const isActive = true;
    
    return (
        <div
            style={{
                fontSize: isActive ? '1rem' : '1.2rem',
                fontWeight: isActive ? 'bold' : 'normal',
                color: 'blue',
            }}
        >텍스트</div>
    );
}
