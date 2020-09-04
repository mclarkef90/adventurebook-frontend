import React from 'react'
import { connect } from 'react-redux';
import { createUser } from '../actions/createUser'

class SignUp extends React.Component {

  constructor(props){
    super(props);
    this.state={
      username: "",
      password: "",
      password_confirmation: "",
      email: "",
      profile_img: "",
      biography: ""
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    this.props.createUser(this.state)

    this.setState({
      username: "",
      password: "",
      password_confirmation: "",
      email: "",
      profile_img: "",
      biography: ""
    })
  }

  render() {

    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <h2>Create User Profile</h2>
        <label>Username:</label>
        <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>Email:</label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>Password:</label>
        <input type="text" name="password" value={this.state.password} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>Password Confirmation:</label>
        <input type="text" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>Profile Image:</label>
        <input type="text" name="profile_img" value={this.state.profile_img} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>Biography:</label>
        <input type="text" name="biography" value={this.state.biography} onChange={this.handleOnChange}/>
        <br/><br/>
        <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, {createUser})(SignUp)
