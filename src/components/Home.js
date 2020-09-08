import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

 class Home extends React.Component {
  render(){
    return(
      <div className="container">
      {localStorage.getItem('userId') == undefined ?
        <Redirect to="/LogIn"/>
        :
        null
      }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    user: state.user
  }
}


export default connect(mapStateToProps)(Home)
