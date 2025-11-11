import ListItem from '../components/ListItem';

// 반복 렌더링

// map() 메서드 사용하기
// JavaScript의 표준 내장 객체인 Array의 map() 메서드는
// 각 요소를 순회하면서 가공한 결과를 새로운 배열로 반환

export default function App(){

    // 이 배열은 jsx 요소로 담긴 객체로 구성된 데이터 형태
    // 단점은 가독성이 떨어지고 확장성이 좋지 않음
    // const items = [
    //     <li key='사과'>사과</li>,
    //     <li key='바나나'>바나나</li>,
    //     <li key='딸기'>딸기</li>,
    // ];

    // return <ul>{items}</ul>

    // map() 메서드 사용
    const items = ['사과', '바나나', '딸기'];

    // return (
    //     <ul>
    //         {items.map((item, index) => (
    //             <li key={index}>{item}</li>
    //         ))}
    //     </ul>
    // );

    // 컴포넌트 사용
    return (
        <ul>
            {items.map((item, index) => (
                <ListItem key={index} text={item} />
            ))}
        </ul>
    );



    
}
