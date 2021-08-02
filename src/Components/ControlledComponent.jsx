import React, { Component } from 'react';

class ControlledComponent extends Component {
  state = {
    value: '',
  };
  change = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  };
  click = () => {
    console.log(this.state.value);
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <input value={value} type="text" onChange={this.change} />
        {/* 상태가 있는 것들은 onChange 를 넣어줘야함 */}
        <button onClick={this.click}>전송</button>
      </div>
    );
  }
}

export default ControlledComponent;
