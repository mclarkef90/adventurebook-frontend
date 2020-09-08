import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import EditUser from '../components/EditUser'
import UserAdventures from '../components/UserAdventures'
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
      <>
        {this.props.user ?
        <>
          <h1> User Profile </h1>
          <img src={user.attributes.profile_img} alt="kitten" className="profileImg"/>
          <h2> Username: {user.attributes.username} </h2>
          <h2> Email: {user.attributes.email} </h2>
          <h2> Biography: {user.attributes.biography} </h2>
          {this.state.editProfile ?
            <>
            <EditUser user={user}/>
            </>
            :
            null
          }
          <button onClick={this.hideEditProfile}>Edit Profile</button>{' '}
          <button onClick={(id) => this.handleDelete(user.id)}>Delete Profile</button>
          <br/>


          <h1> My Adventure Ideas </h1>
          <button onClick={this.hideAddAdventure}>Add Adventure</button>{' '}
          {this.state.addAdventure ?
            <>
            <AddAdventure userid={user.id}/>
            </>
            :
            null
          }

          <UserAdventures userid={user.id} />

          <h1> My Comments </h1>
          <UserReviews userid={user.id}/>

        </>
        :
        null
        }
      </>
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
