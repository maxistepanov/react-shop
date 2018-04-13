import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {send} from "./redux/app/action";

class App extends Component {

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
                    id="message" onChange={this.handleInput}>

        </textarea>
        </div>
        <button onClick={this.send}>Send me</button>
      </div>
    );
  }
}

App = connect(
  (state) => ({}),
  (dispatch) => ({
    sendMessage: (message) => {
      dispatch(send(message))
    }
  })
)(App);

export default App;
