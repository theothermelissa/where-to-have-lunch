import React, { Component } from 'react';

const PrefillText = "Abracadabra.";

class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: PrefillText,
    };
  }

  render() {
    return (
    <p>{this.state.text}</p>
    )
  }
};

export default BodyContent;