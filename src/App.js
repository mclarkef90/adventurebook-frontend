import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import UserContainer from './containers/UserContainer'
import TopIdeas from './components/TopIdeas'
import {fetchUser} from './actions/fetchUser'
import Home from './components/Home'



class App extends React.Component {

  componentDidMount(){
    let id = localStorage.getItem('userId')
    if (id != undefined)
    {this.props.boundFetchUser(id)}
  }

  logoutHandler = () => {
    console.log("hi")
    localStorage.clear()
  }

  render() {
    return (
      <div>
        <NavBar logoutHandler={this.logoutHandler}/>
        <Route path='/' render={() => <Home />} />
        <Switch>
        <Route path='/LogIn' render={(routerProps) => <LogIn {...routerProps}/>} />
        <Route path='/Profile' render={() => <UserContainer />}/>
        <Route path='/TopIdeas' render={() => <TopIdeas />} />
        </Switch>

      </div>
    )
  };
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return(
    {boundFetchUser: (id) => dispatch(fetchUser(id))}
  )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
