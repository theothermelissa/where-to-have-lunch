import React, { Component } from 'react';

class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Type something.",
    };
    this.updateText = this.updateText.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  updateText() {
    this.setState({
      text: "something else",
    })
  }
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  render() {
    return (
    <div>
      <input
        type="text"
        // value={this.state.text}
        onChange={this.handleChange}
        />
      <br />
      <p>{this.state.text}</p>
      {/* <button onClick={this.updateText}>Update</button> */}
    </div>
    )
  }
};

export default BodyContent;