import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "Amir Mustafa",
      email: "test@gmail.com",
      phone: "9100000011",
      message: "my test message"
    };
  }

  handlechangeall = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  /* handlename = event => {
    this.setState({
      fullname: event.target.value
    });
  };

  handleemail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlephone = event => {
    this.setState({
      phone: event.target.value
    });
  };

  handlemessage = event => {
    this.setState({
      message: event.target.value
    });
  }; */

  handleSubmit = event => {
    /* alert(`
        Fullname: ${this.state.fullname}
        Email: ${this.state.email}
        Mobile: ${this.state.phone}
        Message: ${this.state.message}
    `); */

    alert(JSON.stringify(this.state));
  };
  render() {
    return (
      <div>
        <h2>This is the Contact page</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>Fullname</label>
          <br />
          <input
            type="text"
            name="fullname"
            value={this.state.fullname}
            onChange={this.handlechangeall}
          />{" "}
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handlechangeall}
          />{" "}
          <br />
          <label>Mobile</label>
          <br />
          <input
            type="number"
            name="number"
            value={this.state.phone}
            onChange={this.handlechangeall}
          />{" "}
          <br />
          <label>Message</label>
          <br />
          <textarea
            value={this.state.message}
            name="message"
            onChange={this.handlechangeall}
          />{" "}
          <br></br>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

/* const Form = () => {
  return <label> My form </label>;
}; */

export default Form;
