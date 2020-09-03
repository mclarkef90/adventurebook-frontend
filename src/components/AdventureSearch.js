import React from 'react'
import {connect} from 'react-redux'
import { addLike } from '../actions/addLike';
// import NewComment from './NewComment'

class AdventureSearch extends React.Component{

  constructor(props){
    super(props)

    this.state={
      searchTerm: ""
    }
  }

  searchChangeHandler = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  likeHandler = (event) => {
    event.persist()
    let id= parseInt(event.target.dataset.id)
    let likes= parseInt(event.target.dataset.likes)
    let updatedLikes= likes + 1
    this.props.addLike(id, updatedLikes)
  }

  render(){

     return(
      <div>
      {this.props.user !== null ?
        <>
          <br/>
          <input type="text" value={this.state.searchTerm} placeholder="Search Adventures" name="searchTerm" onChange={this.searchChangeHandler}/>
          <br/>
        </>
        :
        null
        }
      </div>
    )}
}

function mapStateToProps(state){
  return{
    adventures: state.adventures,
    users: state.users,
    user: state.user
  }
}

export default connect(mapStateToProps, {addLike})(AdventureSearch)
