import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    valueNum: undefined,
    valueName: undefined,
    number: [],
    name: []
  };

  addNumber = () => {
    let nums = this.state.number;
    let newNums = nums.concat([this.state.valueNum]);
    this.setState({
      number: newNums,
      valueNum: undefined,
      valueName: undefined
    });
  };

  onChangeNum = e => {
    this.setState({ valueNum: e.target.value });
  };

  addName = () => {
    let name = this.state.name;
    let newNames = name.concat([this.state.valueName]);
    this.setState({
      name: newNames,
      valueNum: undefined,
      valueName: undefined
    });
  };

  onChangeName = e => {
    this.setState({ valueName: e.target.value });
  };

  add = () => {
    this.addName();
    this.addNumber();
  };

  render() {
    return (
      <div className="App">
        <h1>Ashley's React Address Book</h1>
        <input
          className="name"
          type="text"
          value={this.state.value}
          placeholder="Name"
          onChange={this.onChangeName}
          required
        />
        <input
          className="number"
          type="text"
          value={this.state.value}
          placeholder="Number"
          onChange={this.onChangeNum}
          required
        />
        <input type="submit" value="Submit" onClick={this.add} />

        <table className="table">
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
          <tr>
            <td>
              <ul>
                {this.state.name.map(name => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {this.state.number.map(num => (
                  <li key={num}>{num}</li>
                ))}
              </ul>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
