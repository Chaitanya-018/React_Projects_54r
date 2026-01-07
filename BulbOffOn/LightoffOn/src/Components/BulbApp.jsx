import React from "react";

export default class BulbApp extends React.Component {

  constructor() {
    super();

    this.state = {
      isOn: false   // bulb is OFF initially
    };
  }

  turnOn = () => {
    this.setState({ isOn: true });
  };

  turnOff = () => {
    this.setState({ isOn: false });
  };

  toggleBulb = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  };

  render() {

    const bulbImage = this.state.isOn
      ? "/pic_bulbon.gif"
      : "/pic_bulboff.gif";

    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>

        <img
          src={bulbImage}
          alt="Bulb"
          style={{ height: "200px", transition: "0.3s" }}
        />

        <h2>{this.state.isOn ? "Bulb is ON" : "Bulb is OFF"}</h2>

        <button onClick={this.turnOn} style={{ marginRight: "10px" }}>
          ON
        </button>

        <button onClick={this.turnOff}>
          OFF
        </button>

         <br /><br />

        <button onClick={this.toggleBulb}>
          TOGGLE
        </button> 

      </div>
    );
  }
}
