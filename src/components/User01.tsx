export default function User(props: { name: string; age: number}) {
    console.log(props);
    return (
        <>
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
        </>
    );
}