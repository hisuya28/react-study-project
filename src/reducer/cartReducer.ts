// 리듀서 함수를 분리하면 코드가 깔끔하고 모듈화되며
// 같은 리듀서를 재사용하여 중복 코드가 줄어들며
// 상태 변경 로직을 한 곳에 모아두면 유지보수가 쉬워짐
// useReducer hook을 여러 개 사용하면 상태별로
// 로직을 분리해 체계적으로 관리할 수 있음

// reducer/cartReducer.ts
interface CartItem {
  id: number;
  name: string;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: number } }
  | { type: "CLEAR_CART" };

export const cartReducer = (
  state: CartItem[],
  action: CartAction
): CartItem[] => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload.id);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};