import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import {fetchUsers} from '../actions/fetchUsers'
import {fetchAdventures} from '../actions/fetchAdventures'
import {fetchReviews} from '../actions/fetchReviews'
import {fetchUser} from '../actions/fetchUser'
import Adventure from '../components/Adventure'
import AdventureSearch from '../components/AdventureSearch';
import AdventuresList from '../components/AdventuresList'



class AdventureContainer extends React.Component {

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
      {this.props.adventures ?
      <>
        <h1> Adventures </h1>
        <Switch>
        <Route path='/Adventures/:id' component={Adventure} />
        <Route path='/Adventures' component={AdventureSearch} />
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
    adventures: state.adventures.data,
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

export default connect(mapStateToProps, mapDispatchToProps)(AdventureContainer)
