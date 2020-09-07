import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import EditUser from '../components/EditUser'
import UserAdventures from '../components/UserAdventures'
import {deleteUser} from '../actions/deleteUser'
import AddAdventure from '../components/AddAdventure'

class UserContainer extends React.Component {

  handleDelete = (id) => {
    let history = this.props.history
    this.props.deleteUser(id, history)
  }

  render(props){
    let userId= localStorage.getItem('userId')
    console.log(this.props)
    return(
      <>
        {this.props.user ?
        <>
          <h1> User Profile </h1>
          <img src={this.props.user.attributes.profile_img} alt="kitten" className="profileImg"/>
          <h2> Username: {this.props.user.attributes.username} </h2>
          <h2> Email: {this.props.user.attributes.email} </h2>
          <h2> Biography: {this.props.user.attributes.biography} </h2>
          <button onClick={()=> (this.props.history.push('/Profile/edit'))}>Edit Profile</button>{' '}
          <button onClick={(id) => this.handleDelete(this.props.user.id)}>Delete Profile</button>
          <br/>

          <h1> My Adventure Ideas </h1>
          <AddAdventure userid={this.props.user.id} />
          <UserAdventures userid={this.props.user.id} />
          <Switch>
          <Route path="/Profile/edit" render={(routerProps) => <EditUser {...routerProps} user={this.props.user}/>}/>
          </Switch>
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
