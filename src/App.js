import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import UserContainer from './containers/UserContainer'
import AdventureSearch from './components/AdventureSearch'
import TopIdeas from './components/TopIdeas'
import {fetchUser} from './actions/fetchUser'
import Home from './components/Home';
import {fetchAdventures} from './actions/fetchAdventures'
import {fetchUsers} from './actions/fetchUsers'
import {fetchReviews} from './actions/fetchReviews'
import Adventure from './components/Adventure'
import TopUser from './components/TopUser'

class App extends React.Component {

  componentDidMount(){
    let id = localStorage.getItem('userId')
    if (id != undefined)
      {this.props.boundFetchUser(id)
      this.props.boundFetchUsers();
      this.props.boundFetchAdventures();
      this.props.boundFetchReviews();
    }
  }

  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading){
      return <div>Loading</div>
    }
    else {
      return (
      <>
    <Switch>
      <Route path='/Profile' render={(routerProps) => <UserContainer {...routerProps} user={this.props.user} users={this.props.users}/>}/>
      <Route path='/Adventures/Search' render={(routerProps) => <AdventureSearch {...routerProps} adventures={this.props.adventures}/>}/>
      <Route path='/Adventures/:id' render={(routerProps) => <Adventure {...routerProps} />}/>
      <Route path='/Users/:id' render={(routerProps) => <TopUser {...routerProps} user={this.props.user} users={this.props.users} adventures={this.props.adventures}/>}/>
      </Switch>
      </>
      )
    }
  }

  logoutHandler = () => {
    localStorage.clear()
  }

  render() {
    console.log(this.props)
    return (
      <div>
      <NavBar logoutHandler={this.logoutHandler}/>
      <Route path='/' render={() => <Home />} />
      <Route path='/LogIn' render={(routerProps) => <LogIn {...routerProps}/>} />
      <Route path='/SignUp' render={(routerProps) => <SignUp {...routerProps}/>} />
      <Route path='/TopIdeas' render={() => <TopIdeas />} />
      {this.handleLoading()}
      </div>
    )
  };
}

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
    adventures: state.adventures,
    reviews: state.reviews,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return(
    {
      boundFetchUser: (id) => dispatch(fetchUser(id)),
      boundFetchUsers: () => dispatch(fetchUsers()),
      boundFetchAdventures: () => dispatch(fetchAdventures()),
      boundFetchReviews: () => dispatch(fetchReviews())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
