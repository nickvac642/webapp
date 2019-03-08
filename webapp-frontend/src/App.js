import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users')
      .then(content => {
        this.setState({content: content});
        console.warn(content);
      });

    console.warn('ghehe')
  }


  renderUsers() {
    return this.state.content.data.users.map(item => {
      return <p>{item}</p>
    })
  }


  render() {
    const content = this.state.content;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {content ? this.renderUsers() : null}
          <a
            className="App-link"
            href="https://github.com/nickvac642"
            target="_blank"
            rel="noopener noreferrer"
          >
            Goto Github
          </a>
        </header>
      </div>
    );
  }
}

export default App;
