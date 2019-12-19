import React, { Component } from 'react';

const inputStyle = {
  width: "300px",
  margin: "10px",
}

class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "What are the options? Separate them with commas.",
      choices: [],
      randomIndex: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.choose = this.choose.bind(this);
    this.reset = this.reset.bind(this);
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }
  handleSubmit() {
    const optionsList = this.state.text.split(",");
    this.setState({
      choices: optionsList
    });
  }
  choose() {
    this.setState({
      randomIndex: Math.floor(Math.random() * (this.state.choices.length))
    });
  }

  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  // }
  

  reset() {
    this.setState({
      randomIndex: ""
    });
  }
  render() {
    const options = this.state.choices.map(name => <li key={name}>{name}</li>);
    const choice = options[this.state.randomIndex];
    const makeMyChoice = <button onClick={this.choose}>Decide For Me</button>;
    const startOver = <button onClick={this.reset}>Start Over</button>
    return (
    <div>
      <h2>What are you thinking?</h2>
      <input
        type="text"
        style={inputStyle}
        placeholder={this.state.text}
        onChange={this.handleChange}
        />
      <button onClick={this.handleSubmit}>Make My List</button>
      <br />
      <h2>Your Choices:</h2>
      <ul>
        {options}
      </ul>
      {
        this.state.randomIndex === "" ? makeMyChoice : startOver
      }
      <h1>{choice}</h1>
    </div>
    )
  }
};

export default BodyContent;