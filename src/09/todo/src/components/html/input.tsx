// 텍스트 입력 요소 컴포넌트로 분리하기

type Inputprops = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & {
    type?: 'text';
}

export default function Input(props: Inputprops) {
    const {...rest} = props;
    return <input {...rest}/>
}