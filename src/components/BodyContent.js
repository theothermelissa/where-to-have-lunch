import React, { Component } from 'react';

const inputStyle = {
  width: "200px",
  margin: "10px",
}

class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "What are the options? Separate them with commas.",
      choices: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const optionsList = this.state.text.split(",");
    this.setState({
      choices: optionsList
    });
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }
  render() {
    const options = this.state.choices.map(name => <li key={name}>{name}</li>);
    return (
    <div>
      <h1>What are you thinking?</h1>
      <input
        type="text"
        style={inputStyle}
        placeholder="Separate Options with Commas"
        onChange={this.handleChange}
        />
      <button onClick={this.handleSubmit}>Make My List</button>
      <br />
      <h2>Your Choices:</h2>
      <ul>
        {options}
      </ul>
    </div>
    )
  }
};

export default BodyContent;