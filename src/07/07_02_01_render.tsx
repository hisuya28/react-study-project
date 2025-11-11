import ListItem from '../components/ListItem'

// 반복 렌더링

// 배열이나 리스트 형태의 데이터를 기반으로
// 여러 컴포넌트를 생성해 일관된 방식
// 상태 변화에 따라 UI를 효율적으로 업데이트

export default function App(){

    // 배열의 각 요소는 문자열로 변환되므로 공백 없이 하나로 합침
    // const items = ['item1', 'item2', 'item3'];
    // return <div>{items}</div>;

    // 이 문제를 해결하려면 각 요소를 jsx 요소로 변환해야 함
    // 그래야 각각의 독립적인 요소로 인식하고 개별적으로 렌더링
    // const items = [
    //     <li key='0'>아이템 1</li>,
    //     <li key='1'>아이템 2</li>,
    //     <li key='2'>아이템 3</li>,
    // ];

    // 배열 안에는 jsx 요소 뿐만 아니라 컴포넌트도 포함 가능
    const items = [
        <ListItem key='0' text='아이템 1'/>,
        <ListItem key='1' text='아이템 2'/>,
        <ListItem key='2' text='아이템 3'/>,
    ];


    return <ul>{items}</ul>
}
