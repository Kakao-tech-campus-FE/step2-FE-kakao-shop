import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "Liverpool"
    };
  }

  Handle = (e) => {
    this.setState({
      selectValue: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <input
          id="Tottenham Hotspur"
          value="Tottenham Hotspur"
          type="radio"
          checked={this.state.selectValue === "Tottenham Hotspur"}
          onChange={this.Handle}
        />
        Tottenham Hotspur
        <input
          id="Liverpool"
          value="Liverpool"
          type="radio"
          checked={this.state.selectValue === "Liverpool"}
          onChange={this.Handle}
        />
        Liverpool
        <input
          id="Manchester City FC"
          value="Manchester City FC"
          type="radio"
          checked={this.state.selectValue === "Manchester City FC"}
          onChange={this.Handle}
        />
        Manchester City FC
      </div>
    );
  }
}
