import React, { Component } from 'react';

class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "something",
    };
    this.updateText = this.updateText.bind(this);
  }
  updateText() {
    this.setState({
      text: "something else",
    })
  }
  render() {
    return (
    <div>
      <p>{this.state.text}</p>
      <button onClick={this.updateText}>Update</button>
    </div>
    )
  }
};

export default BodyContent;