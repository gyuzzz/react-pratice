import React, { useState } from 'react';

const Example2 = () => {
  const [state, setState] = useState({ count: 0 });
  const click = () => {
    // setState({ count: state.count + 1 });
    //객체형식으로 바로 리턴해주는 것도 있다.
    setState((state) => {
      return { count: state.count + 1 };
    });
    //state 를 변경하지 않고 새로운 state를 반환해줘서 함수형으로 해주는게 좋다.
  };
  return (
    <div>
      <p>You clickd {state.count} times</p>
      <button onClick={click}>Click me!!</button>
    </div>
  );
};
