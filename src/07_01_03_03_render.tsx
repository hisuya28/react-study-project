// and 연산자를 사용한 조건부 렌더링
// 3. 조건에 따라 클래스 다르게 지정하기
// 컴포넌트의 상태에 따라 스타일을 다르게 적용할 때 유용
// <div> 요소에 title 클래스가 적용되고
// isActie 값이 true 일 때만 active 클래스가 추가되고
// && 연산자는 조건이 false라면 false 값으로 반환되면서
// 문자열로 변환되지 않기 때문에 className 값 속성이 자동 무시

export default function App(){
    const isActive = false;
    return <div className={`title ${isActive && 'active'}`}>텍스트</div>
}
