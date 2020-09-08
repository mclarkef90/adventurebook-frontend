import React from 'react'
import { connect } from 'react-redux';
import { createUser } from '../actions/createUser';
import { fetchUsers } from '../actions/fetchUsers'

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

  componentDidMount(){
    this.props.fetchUsers()
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    let history = this.props.history
    this.props.createUser(this.state, history)

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
      <div className="container">
        <h2>Create User Profile</h2>

          <form onSubmit={this.handleOnSubmit}>

            <div class="form-group">
              <label>Username:</label>
              <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/>
            </div>

            <div class="form-group">
              <label>Email:</label>
              <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange}/>
            </div>

            <div class="form-group">
              <label>Password:</label>
              <input type="text" name="password" value={this.state.password} onChange={this.handleOnChange}/>
            </div>

            <div class="form-group">
              <label>Password Confirmation:</label>
              <input type="text" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleOnChange}/>
            </div>

            <div class="form-group">
              <label>Profile Image:</label>
              <input type="text" name="profile_img" value={this.state.profile_img} onChange={this.handleOnChange}/>
            </div>

            <div class="form-group">
              <label>Biography:</label>
              <input type="text" name="biography" value={this.state.biography} onChange={this.handleOnChange}/>
            </div>

            <input type="submit" value="Submit" class="btn btn-light"/>

          </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    users: state.users,
  }
}


export default connect(mapStateToProps, {createUser, fetchUsers})(SignUp)
