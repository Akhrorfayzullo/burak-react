//@ts-nocheck
import React from "react";
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  changeDetail = () => {
    this.setState({
      color: "blue",
      brand: "Tesla",
      model: "Model Y",
      year: 2024,
    });
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillUnmount() {
    console.log("willUnmount");
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          Color: {this.state.color}- Mdel: {this.state.model}
          from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeDetail}>
          Change Details
        </button>
      </div>
    );
  }
}
export default Test;
