import React from 'react';
import {NavLink, Link} from 'react-router-dom'

const link= {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}


export default function NavBar(props){
  return(
    <>
    <NavLink to="/" exact style={link} activeStyle={{background: 'green'}}>
      Home
    </NavLink>

    <NavLink to="LogIn" exact style={link} activeStyle={{background: 'green'}}>
      Log In
    </NavLink>

    <NavLink to="TopIdeas" exact style={link} activeStyle={{background: 'green'}}>
      Today's Top
    </NavLink>

    {localStorage.userId !== undefined ?
        <>
        <NavLink to="Profile" exact style={link} activeStyle={{background: 'green'}}>
          Profile
        </NavLink>

        <Link to="/" onClick={console.log("hi")} exact style={link} activeStyle={{background: 'green'}}>
          Log Out
        </Link>
        </>
        :
        null}

    <br/><br/>
    <h1>
      MyAdventureBook - An App for finding and sharing good ideas of things to do.
    </h1>
    </>
  )
}
