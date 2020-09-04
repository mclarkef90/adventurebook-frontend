import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom'
import {fetchUsers} from '../actions/fetchUsers'
import {fetchAdventures} from '../actions/fetchAdventures'
import {fetchReviews} from '../actions/fetchReviews'
import {fetchUser} from '../actions/fetchUser'

class UserContainer extends React.Component {

  componentDidMount(){
    this.props.boundFetchUser();
    this.props.boundFetchUsers();
    this.props.boundFetchAdventures();
    this.props.boundFetchReviews();
  }

  render(props){
    let userId= localStorage.getItem('userId')

    return(
      <>
      {this.props.user ?
      <>
        <h1> User Profile </h1>
        <img src={this.props.user.data.attributes.profile_img} alt="kitten" className="profileImg"/>
        <h2> UserName: {this.props.user.data.attributes.username} </h2>
        <h2> Biography: {this.props.user.data.attributes.biography} </h2>
        <br/>
        <h1> My Adventure Ideas </h1>

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
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return{
    boundFetchUser: () => dispatch(fetchUser()),
    boundFetchUsers: () => dispatch(fetchUsers()),
    boundFetchAdventures: () => dispatch(fetchAdventures()),
    boundFetchReviews: () => dispatch(fetchReviews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
