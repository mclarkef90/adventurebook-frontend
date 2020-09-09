import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import EditUser from '../components/EditUser'
import UserAdventures from '../components/UserAdventures'
import UserLogAdventures from '../components/UserLogAdventures'
import UserLogLikedAdventures from '../components/UserLogLikedAdventures'
import UserReviews from '../components/UserReviews'
import {deleteUser} from '../actions/deleteUser'
import AddAdventure from '../components/AddAdventure'

class UserContainer extends React.Component {

  constructor(props){
    super(props)
    this.state={
      editProfile: false,
      editAdventure: false,
      editReview: false,
      addAdventure: false
    }
  }

  hideEditProfile = () => {
    this.setState(prevState => ({editProfile: !this.state.editProfile}))
    }

  hideAddAdventure = () => {
    this.setState(prevState => ({addAdventure: !this.state.addAdventure}))
    }


  handleDelete = (id) => {
    let history = this.props.history
    this.props.deleteUser(id, history)
  }

  render(props){
    let userId= localStorage.getItem('userId')
    console.log(this.props)
    let user= this.props.users.filter(user=> user.id == userId)[0]
    console.log(user)
    console.log(this.state)

    return(
      <div className="container">
        {this.props.user ?
        <>
          <h2> User Profile </h2>
          <img src={user.attributes.profile_img} alt="kitten" className="profileImg"/>
          <p> Username: {user.attributes.username} </p>
          <p> Email: {user.attributes.email} </p>
          <p> Biography: {user.attributes.biography} </p>
          {this.state.editProfile ?
            <>
            <EditUser user={user}/>
            </>
            :
            null
          }
          <button class="btn btn-link" onClick={this.hideEditProfile}>Edit Profile</button>{' '}
          <button class="btn btn-link" onClick={(id) => this.handleDelete(user.id)}>Delete Profile</button>
          <br/>


          <h3> My Adventure Ideas </h3>
          <button class="btn btn-link" onClick={this.hideAddAdventure}>Add Adventure</button>{' '}
          {this.state.addAdventure ?
            <>
            <AddAdventure userid={user.id}/>
            </>
            :
            null
          }

          <UserAdventures userid={user.id} />

          <h3> My Completed Adventures </h3>
          <UserLogAdventures userid={user.id} />

          <h3> My Liked Adventures </h3>
          <UserLogLikedAdventures userid={user.id} />

          <h3> My Comments </h3>
          <UserReviews userid={user.id}/>

        </>
        :
        null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    user: state.user,
    users: state.users,
    adventures: state.adventures,
    reviews: state.reviews,
    loading: state.loading
  }
}

export default connect(mapStateToProps, {deleteUser})(UserContainer)
