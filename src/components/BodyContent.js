import React, { Component } from 'react';

class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
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

  reset() {
    this.setState({
      text: "",
      choices: [],
      randomIndex: ""
    });
  }
  render() {
    const options = this.state.choices.map(name => <li key={name}>{name}</li>);
    const choice = this.state.choices[this.state.randomIndex];
    const makeMyChoice = <button onClick={this.choose}>Decide For Me</button>;
    const startOver = <button onClick={this.reset}>Start Over</button>
    return (
    <div className="container">
        <input
          className="inputBox"
          type="text"
          value={this.state.text}
          placeholder="What are your options? Separate them with commas."
          onChange={this.handleChange}
          />
        <button onClick={this.handleSubmit}>Make My List</button>
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