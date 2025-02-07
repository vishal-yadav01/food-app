import React from "react";

class ClassProfile extends React.Component {
  constructor(props) {
    super(props);
    //! creating state
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("child -> constructor");
  }

  componentDidMount() {
    // this is palce where we API  call s
    console.log("chaild -> componentDidMount");
  }
  render() {
    console.log("child -> render ");

    return (
      <>
        <h1>Profile Class Component</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>XYZ: {this.props.xyz}</h3>
        <h1>count:{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          click
        </button>
      </>
    );
  }
}

export default ClassProfile;
