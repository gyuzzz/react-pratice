import React, { Component, createRef } from 'react';

class UnControlledComponent extends Component {
  inputRef = createRef();

  click = () => {
    //input 엘리먼트의 현재 상태 값 (value)를 꺼내서 전송
    // const input = document.querySelector('#my-input').value;
    // console.log(input);
    //이방법은 안좋은 방식임 real-DOM 이기때문에 리액트에서 지양하는 방식
    //그래서 reference 기술이 있음.
    console.log(this.inputRef.current.value);
    //참조값의 current.value 하면 현재 값을 참조해서 컨트롤 할 수 있다.
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} id="my-input" type="text" />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }
}

export default UnControlledComponent;
