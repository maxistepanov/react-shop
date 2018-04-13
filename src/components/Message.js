import React, {Component} from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import {connect} from "react-redux";
import {send} from "../redux/app/action";
import {selectDataMessage} from "../redux/app/selectors";

class Message extends Component {

  send = () => {
    const {message} = this.state;
    this.props.sendMessage(message)
  };

  handleInput = (event) => {
    this.setState({
      message: event.target.value
    })
  };

  render() {
    const {message} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="wrapper" style={{margin: 10}}>
          <textarea style={{width: '100%', boxSizing: 'border-box', padding: 15, height: 250}} name="message"
                    id="message" onChange={this.handleInput} defaultValue={message}>

        </textarea>
        </div>
        <button onClick={this.send}>Send me</button>
      </div>
    );
  }
}

Message = connect(
  (state) => ({
    message: selectDataMessage(state)
  }),
  (dispatch) => ({
    sendMessage: (message) => {
      dispatch(send(message))
    }
  })
)(Message);

export default Message;
