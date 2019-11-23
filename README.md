# React JS Forms

For this we have uses react package 'react-router-dom'

## Installation
1. After basic react app installation create home, about and contact component and write in src/components/Form.js
2. npm install
3. In Form.js

a. Written the form in render
```
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
```

b. Define the default value of form in state

```
constructor(props) {
    super(props);
    this.state = {
      fullname: "Amir Mustafa",
      email: "test@gmail.com",
      phone: "9100000011",
      message: "my test message"
    };
  }

```

c. On click on each input a common method/function is called where we will update the code

```
handlechangeall = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
```

d. On form submit call any method say handleSubmit

```
handleSubmit = event => {
    alert(`
        Fullname: ${this.state.fullname}
        Email: ${this.state.email}
        Mobile: ${this.state.phone}
        Message: ${this.state.message}
    `);

    // alert(JSON.stringify(this.state)); // converts js objects into strings
  };
  
```
## Video

For understanding
https://www.loom.com/share/9c169a5835f149118a2ca0f596200def
