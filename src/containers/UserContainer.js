import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom'
import {fetchUser} from '../actions/fetchUser'

class UserContainer extends React.Component {

  // componentDidMount(){
  //   let id = localStorage.getItem('userId')
  //   if (id != undefined)
  //   {this.props.boundFetchUser(id)}
  // }

  render(props){
    return(
      <>
      {this.props.user ?
      <>
        <h2> Hi {this.props.user.data.attributes.username} </h2>
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
    user: state.user
  }
}

// const mapDispatchToProps = dispatch => {
//   return(
//     {boundFetchUser: (id) => dispatch(fetchUser(id))}
//   )
// }

export default connect(mapStateToProps)(UserContainer)
