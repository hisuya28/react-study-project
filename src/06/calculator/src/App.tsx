import { useState } from 'react';
import Decimal from 'decimal.js';

interface CalculatorState {
  currentNumber: string; // 현재 입력 중인 숫자
  previousNumber: string; // 이전에 입력 중인 숫자
  operation: string | null; // 연산 기호 또는 null
  isNewNumber: boolean; // 새로운 숫자 입력 여부
}

export default function App() {

  const [state, setState] = useState<CalculatorState>({
    currentNumber: '0',
    previousNumber: '',
    operation: null,
    isNewNumber: true,
  });

  // 숫자 버튼 클릭 처리 함수
  const handlerNumberClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const value = event.currentTarget.value;
    if(state.isNewNumber){
      // 현재 숫자를 새로운 숫자로 대체
      setState({
        ...state,
        currentNumber: value,
        isNewNumber: false,
      });
    }else{
      // 기존 숫자에 새로운 숫자를 이어 붙임
      setState({
        ...state,
        currentNumber: state.currentNumber + value,
      });
    }
  };

  // 연산 버튼 클릭 처리 함수
  const handlerOperatorClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    // 그 전에 예외처리
    if(state.currentNumber === '0') return;

    // 현재 클릭한 연산 기호 가져오기
    const operator = event.currentTarget.value;
    
    // 현재 출력칸에 표시된 숫자를 숫자형으로 변환
    const current = parseFloat(state.currentNumber || '0');

    // 이전 숫자와 연산 기호가 모두 있는 경우 (연속 연산)
    if(state.previousNumber !== '' && state.operation){
      const prev = parseFloat(state.previousNumber);
      let result = 0;

      // 연산 기호에 따라 연산 수행
      switch (state.operation){
        case '+':
          // result = prev + current;
          result = new Decimal(prev).plus(current).toNumber();
          break;
        case '-':
          // result = prev - current;
          result = new Decimal(prev).minus(current).toNumber();
          break;
        case '*':
          // result = prev * current;
          result = new Decimal(prev).times(current).toNumber();
          break;
        case '/':
          // result = prev / current;
          result = new Decimal(prev).dividedBy(current).toNumber();
          break;
      }

      // = 버튼 클릭 시 연산 종료
      if(operator === '='){
        setState({
          currentNumber: result.toString(),
          previousNumber: '',
          operation: null,
          isNewNumber: true,
        });
      }else{
        setState({
          currentNumber: '',
          previousNumber: result.toString(),
          operation: operator,
          isNewNumber: true,
        })
      }
    }else{
      // 첫 번째 숫자 입력 후 연산 기호 버튼 클릭 시
      setState({
        currentNumber: '',
        previousNumber: current.toString(),
        operation: operator,
        isNewNumber: true,
      });
    }
  };

  // C 버튼 클릭 처리 함수
  const handlerClear = () => {
    setState({
      currentNumber: '0',
      previousNumber: '',
      operation: null,
      isNewNumber: true,
    });
  };

  // 소수점 버튼 클릭 처리 함수
  const handlerDot = () => {
    if(!state.currentNumber.includes('.')){
      setState({
        ...state,
        currentNumber: state.currentNumber + '.',
        isNewNumber: false,
      });
    }
  };

  return (
    <article className='calculator'>
      <form name='forms'>
        <input type='text' name='output' value={state.currentNumber} readOnly />
        <input type='button' className='clear' value='C' onClick={handlerClear} />
        <input type='button' className='operator' value='/' onClick={handlerOperatorClick} />
        <input type='button' value='1' onClick={handlerNumberClick} />
        <input type='button' value='2' onClick={handlerNumberClick} />
        <input type='button' value='3' onClick={handlerNumberClick} />
        <input type='button' className='operator' value='*' onClick={handlerOperatorClick} />
        <input type='button' value='4' onClick={handlerNumberClick} />
        <input type='button' value='5' onClick={handlerNumberClick} />
        <input type='button' value='6' onClick={handlerNumberClick} />
        <input type='button' className='operator' value='+' onClick={handlerOperatorClick} />
        <input type='button' value='7' onClick={handlerNumberClick} />
        <input type='button' value='8' onClick={handlerNumberClick} />
        <input type='button' value='9' onClick={handlerNumberClick} />
        <input type='button' className='operator' value='-' onClick={handlerOperatorClick} />
        <input type='button' className='dot' value='.' onClick={handlerDot} />
        <input type='button' value='0' onClick={handlerNumberClick} />
        <input type='button' className='operator result' value='=' onClick={handlerOperatorClick} />
      </form>
    </article>
  );
}