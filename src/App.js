import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import Home from './components/Home';
import UserContainer from './containers/UserContainer'
import TopIdeas from './components/TopIdeas'


class App extends React.Component {

  componentDidMount(){
    let id = localStorage.getItem('userId')
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
        <Route path='/LogIn' render={() => <LogIn />} />
        <Route path='/Home' render={() => <UserContainer />}/>
        <Route path='/TopIdeas' render={() => <TopIdeas />} />
        <Route path='/' render={() => <Home />} />
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

export default withRouter(connect(mapStateToProps)(App))
