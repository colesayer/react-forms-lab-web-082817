import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      passWord: '',
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    })
  }

  handlePassWordChange = (event) => {
    this.setState({
      passWord: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.userName !== "" && this.state.passWord !== ""){
      console.log(this.state.userName, this.state.passWord)
      return this.props.onSubmit
    }

  }


  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.userName} onChange={this.handleUserNameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.passWord} onChange={this.handlePassWordChange} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
