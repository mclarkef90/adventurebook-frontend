import React from 'react'
import {connect} from 'react-redux'
import { addLike } from '../actions/addLike';

class AdventuresList extends React.Component{

  likeHandler = (event) => {
    event.persist()
    let id= parseInt(event.target.dataset.id)
    let likes= parseInt(event.target.dataset.likes)
    let updatedLikes= likes + 1
    this.props.addLike(id, updatedLikes)
  }

  render(props){
     return(
      <div>
      <br/>
      {this.props.adventures.map(adventure =>
        <ul key={adventure.id}>
        <img className=".profileImg" alt="adventure" src={adventure.image_url}/>
        <h1>{adventure.title}</h1>
        <p>{adventure.description}</p>
        </ul>)}
      </div>
    )}
}

export default AdventuresList
