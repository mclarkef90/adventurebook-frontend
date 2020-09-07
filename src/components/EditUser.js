import React from 'react'
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom'
import {editUser} from '../actions/editUser'

class EditUser extends React.Component {

  constructor(props){
    super(props)
    console.log(props)
    this.state={
      username: props.user.attributes.username,
      email: props.user.attributes.email,
      profile_img: props.user.attributes.profile_img,
      biography: props.user.attributes.biography,
      id: props.user.id
    }
    console.log(this.state)
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    event.persist()
    let id= parseInt(event.target.dataset.id)
    console.log(this.props)
    console.log(id)
    this.props.editUser(id, this.state)
    this.setState({
      username: "",
      email: "",
      profile_img: "",
      biography: ""
    })

  }

  // shouldComponentUpdate(nextProps, nextState){
  //   return (this.props.users.length !== nextProps.users.length || nextState.name !== this.state.name)
  // }
  //
  // componentDidUpdate(){
  //   const user = this.props.users.filter(user => user.id == this.props.match.params.id)[0]
  //   console.log(user.name)
  //   if (user){
  //     this.setState({
  //       name: user.name,
  //       email: user.email,
  //       city: user.city,
  //       state: user.state,
  //       id: user.id
  //     })
  //   }
  //
  // }


  render(){
    return(
      <div>
        <>
        <form data-id={this.state.id} onSubmit={this.handleOnSubmit}>
        <h2>Edit User Profile</h2>
        <label>Name:</label>
        <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>Email:</label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>City:</label>
        <input type="text" name="profile_img" value={this.state.profile_img} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>State:</label>
        <input type="text" name="biography" value={this.state.biography} onChange={this.handleOnChange}/>
        <br/><br/>
        <input type="submit" value="Submit"/>{'  '}
        </form>
      </>
      </div>
    )
  }
}

export default connect(null, {editUser})(EditUser)
