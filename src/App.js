import React from 'react';
import Navbar from './Components/Navbar.js';
import Email from './Components/Email.js';
import uniqid from 'uniqid';

class App extends React.Component {
  state = {
    users: [
      {
        id: 1,
        name: "John",
        email: "john@gmail.com"
      },
      {
        id: 2,
        name: "Jane",
        email: "jane@gmail.com"
      },
      {
        id: 3,
        name: "Josh",
        email: "josh@gmail.com"
      }
    ],
    name: "",
    email: ""
  }

  //method to run when the name input field changes
  changeName = (e) => {
    this.setState({ name: e.target.value });
  }

  //method to run when the email input field changes
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  //method to run when the form is submitted
  saveEmail = (e) => {
    e.preventDefault();
    let email = {
      id: uniqid(),
      name: this.state.name,
      email: this.state.email
    }

    this.setState({ users: [...this.state.users, email] });
  }

  //method to delete the component
  delete = (id) => {
    let newUser = this.state.users.filter(user => (
      user.id != id
    ));

    this.setState({ users: newUser });
  }

  render() {
    return (
      <div>
        <Navbar />

        <form className="container my-3" onSubmit={this.saveEmail}>
          <input type="text" className="form-control mb-3" placeholder="Enter Name" onChange={this.changeName} />

          <input type="email" className="form-control mb-3" placeholder="Enter Email" onChange={this.changeEmail} />

          <input type="submit" className="btn btn-primary" value="Create" />

        </form>


        {this.state.users.map(user => (
          <Email key={user.id} name={user.name} email={user.email} id={user.id} deleteComponent={this.delete} />
        ))}

      </div>
    )
  }
}


export default App;
