import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      cpassword: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container my-5 text-center">
        <form onSubmit={this.handleSubmit} className="forminscri">
          <div className="form-group">
            <label className="white">
              Email:
              <input type="text" className="form-control" name="email" onChange={this.handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label className="white">
              Password:
              <input type="password" className="form-control" name="password" onChange={this.handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label className="white">
              Confirm Password:
              <input type="password" className="form-control" name="cpassword" onChange={this.handleChange} />
            </label>
          </div>
          <small className="form-text text-muted white">Already have an account ? login</small>
          <button type="submit" className="btn btn-warning white">Submit</button>
        </form>
      </div>
    );
  }
}

// -------------------------------------------------------------------------------------------

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isNoteState: false
    };
  }

  handleLoginClick() {
    this.setState({isNoteState: true});
  }

  handleLogoutClick() {
    this.setState({isNoteState: false});
  }

  render() {
    const isNoteState = this.state.isNoteState;

    return (
      <div>
        <Greeting isNoteState={isNoteState} />
      </div>
    );
  }
}

function Greeting(props) {
  const isNoteState = props.isNoteState;
  if (isNoteState) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function UserGreeting(props) {
  return <button>Login</button>;
}

function GuestGreeting(props) {
  return (<div>
            <button onClick={props.onClick}>Sign up</button>
            <button onClick={props.onClick}>Login</button>
          </div>);
}

function FromIn(props) {
  return <h1>From Inscription</h1>
}

function Fromlog(props) {
  return <h1>From Login</h1>
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Sign up
    </button>
  );
}

// -------------------------------------------------------------------------------------------

ReactDOM.render(
  <App />,
  // <NameForm />,
  // <LoginControl />,
  document.getElementById('root')
);

serviceWorker.unregister();
