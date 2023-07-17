import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          id="King"
          value="King"
          type="checkbox"
          checked={this.state.selectValue === "King"}
          onChange={this.Handle}
        />
        King
        <input
          id="Queen"
          value="Queen"
          type="checkbox"
          checked={this.state.selectValue === "Queen"}
          onChange={this.Handle}
        />
        Queen
        <input
          id="Rook"
          value="Rook"
          type="checkbox"
          checked={this.state.selectValue === "Rook"}
          onChange={this.Handle}
        />
        Rook


      </div>
    );
  }
}
