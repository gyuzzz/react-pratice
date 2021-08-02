import React, { Component } from 'react';

class Example1 extends Component {
  state = {
    count: 0,
  };

  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <p>You Clicked {count} times</p>
        <button onClick={this.click}>Click me!</button>
      </div>
    );
  }
}

export default Example1;
