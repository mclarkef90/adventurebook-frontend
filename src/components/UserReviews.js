import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteReview} from '../actions/deleteReview'
// import {editAdventure} from '../actions/editAdventure'
import EditReview from './EditReview'

class UserReviews extends React.Component{

  constructor(props){
    super(props)
  }

  handleDelete = (id, adventure_id) => {
    this.props.deleteReview(id, adventure_id)
  }

  render(){
    console.log(this.props.reviews)
    let id= this.props.userid
    let reviews= this.props.reviews.filter(review => review.attributes.user_id == id)
    return(
      <>
        {reviews.map(review=>
          <ul key={review.id}>
            <p>{review.attributes.comment}</p>
            <p>Liked: {review.attributes.liked ? 'Yes' : 'No'}  </p>
            <p>Completed: {review.attributes.completed ? 'Yes' : 'No'}  </p>
            <button>Edit Review</button>{' '}<button onClick={(id, adventure_id)=> this.handleDelete(review.id, review.adventure_id)}>Delete Comment</button>
            <EditReview review={review} />
          </ul>
        )}
      </>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    reviews: state.reviews,
  }
}
export default connect(mapStateToProps, {deleteReview})(UserReviews)
