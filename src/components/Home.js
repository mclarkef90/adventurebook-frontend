import React from 'react';
import {connect} from 'react-redux'

 class Home extends React.Component {
  render(){
    return(
      <>
      {this.props.user ?
        <h2>Hi {this.props.user.username}</h2>
        :
        <p>Log In or Create an Account</p>
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
