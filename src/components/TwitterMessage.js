import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.maxChars = props.maxChars

    this.state = {
      value: '',
      characterCounter: this.maxChars,
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      characterCounter: this.maxChars -= 1,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>Characters Remaining: {this.state.characterCounter}</p>
        <input type="text"
         value = {this.state.value}
         onChange = {this.handleChange}
        />
      </div>
    );
  }
}

export default TwitterMessage;
