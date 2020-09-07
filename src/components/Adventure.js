import React from 'react';
import {connect} from 'react-redux';
import { addLike } from '../actions/addLike';
import {Redirect} from 'react-router-dom'
import AddReview from './AddReview'

class Adventure extends React.Component {

  constructor(props){
    super(props)
  }

  // likeHandler = (event) => {
  //   event.persist()
  //   let id= parseInt(event.target.dataset.id)
  //   let likes= parseInt(event.target.dataset.likes)
  //   let updatedLikes= likes + 1
  //   this.props.boundAddLike(id, updatedLikes);
  // }

  render(){
    let id= this.props.match.params.id
    let adventure = this.props.adventures.filter(adventure => adventure.id == id)[0]
    let reviews= this.props.reviews.filter(review => review.attributes.adventure_id == id)
    console.log(reviews)
    console.log(adventure)
    return(
      <>
      {this.props.user ?
        <>
          <img src={adventure.attributes.image_url} className="profileImg" alt="activity"/>
          <h1>{adventure.attributes.title}</h1>
          <p>{adventure.attributes.description}</p>
          <p>Completions: {adventure.attributes.completions}</p>
          <p>Likes: {adventure.attributes.likes} </p>
          <h2>Reviews</h2>
            {reviews.map(review =>
              <ul key={review.id}>
                <p>{review.attributes.comment}</p>
              </ul>
            )}
          <h3>Write a Review</h3>
          <AddReview user={this.props.user.id} adventure={adventure.id}/>
        </>
      :
      null
      }
      </>
    )
  }
}


const mapStateToProps = state => {
  console.log(state);
  return {
    adventures: state.adventures,
    reviews: state.reviews,
    user: state.user,
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return{
    boundAddLike: (id, updatedLikes) => dispatch(addLike(id, updatedLikes))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adventure)
