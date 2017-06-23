import React, { Component } from 'react';

export default
class Loading extends Component {
  constructor(props) {
		super(props);
	}

  render() {
    // Allow text to be set. Otherwise fall back.
    let text = this.props.text || "Loading...";
    // Using semanticUI loader just for a nice look.
    return (
      <h1 className="ui loader active text">{text}</h1>
    )
  }
}
