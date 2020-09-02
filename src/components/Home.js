import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

 class Home extends React.Component {
  render(){
    return(
      <>
      {this.props.user ?
        <h2></h2>
        :
        <>
        <Redirect to="/LogIn"/>
        </>
      }
      </>
    )
  }
}

const mapStateToProps = state => {
  return{
    user: state.user
  }
}


export default connect(mapStateToProps)(Home)
