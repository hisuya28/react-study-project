
// 타입 정의 - ts 기반의 button 태그에서 사용할 수 있는
// 모든 html 속성을 한꺼번에 사용할 수 있게 해줌
type Buttonprops = React.ComponentPropsWithRef<'button'>

export default function Button(pros: Buttonprops) {
    const { children, ...rest } = pros;
    return <button {...rest}>{children}</button>;
}