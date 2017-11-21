import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CSVLink, CSVDownload} from 'react-csv';

const csvData = [
  ['first_name', 'last_name', 'email'],
  ['Alan', 'Hong', 'xiupan@gmail.com'],
  ['Joe', 'Blow', 'poop@butt.com']
]

const theData = csvData.map(item => {
  return (
    <td>{item}</td>
  )
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <table>
            <thead>Some Data</thead>
              <td>{theData}</td>
          </table>
          <CSVLink data={csvData}>Download as CSV</CSVLink>
        </p>
      </div>
    );
  }
}

export default App;
