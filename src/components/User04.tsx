// User 컴포넌트에 children 속성으로 전달
export default function User({
    // 부모 태그가 title이고 자식 태그가 children임
    title,
    children,
}:{
    // 타입 지정
    title: string;
    children: React.ReactNode;
}) {
    return (
        <>
            <h1>{title}</h1> 
            {children}
        </>
    );
}

// props.children으로 전달받은 콘텐츠를 출력할 수 있음