import React from 'react';
import {NavLink, Link} from 'react-router-dom'



export default function NavBar(props){
  return(
    <>
    <h3 className="jumbotron jumbotron-fluid">
      MyAdventureBook - An App for finding and sharing good ideas of things to do.
    </h3>
    <ul className="nav nav-pills nav-justified">

    <NavLink to="/" exact activeStyle={{color: 'indigo'}} style={{ marginRight: 10 }}>
      Home
    </NavLink>

    <NavLink to="/LogIn" exact activeStyle={{color: 'indigo'}} style={{ marginRight: 10 }}>
      Log In
    </NavLink>

    <NavLink to="/TopIdeas" exact activeStyle={{color: 'indigo'}} style={{ marginRight: 10 }}>
      Today's Top
    </NavLink>

    <NavLink to="/SignUp" exact  activeStyle={{color: 'indigo'}} style={{ marginRight: 10 }}>
      Sign Up
    </NavLink>

    {localStorage.userId !== undefined ?
        <>
        <NavLink to="/Profile" exact  activeStyle={{color: 'indigo'}} style={{ marginRight: 10 }}>
          Profile
        </NavLink>

        <NavLink to="/Adventures/Search" exact  activeStyle={{color: 'indigo'}} style={{ marginRight: 10 }}>
          Adventures
        </NavLink>

        <Link to="/" onClick={props.logoutHandler}  activeStyle={{color: 'indigo'}} style={{ marginRight: 10 }}>
          Log Out
        </Link>
        </>
        :
        null}

    <br/><br/>

    </ul>
    </>
  )
}
