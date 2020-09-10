import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteReview} from '../actions/deleteReview'
// import {editAdventure} from '../actions/editAdventure'
import EditReview from './EditReview'

class UserReviews extends React.Component{

  constructor(props){
    super(props)
    this.state={
      editReview: false
    }
  }

  handleDelete = (id) => {
    this.props.deleteReview(id)
  }

  hideEditReview = () => {
    this.setState(prevState=> ({editReview: !this.state.editReview}))
  }

  render(){
    console.log(this.props.reviews)
    let id= this.props.userid
    let reviews= this.props.reviews.filter(review => review.attributes.user_id == id)
    return(
      <>
        {reviews.map(review=>
          <ul key={review.id} class="card w-50" >
            <p>{review.attributes.comment}</p>
            <p>Liked: {review.attributes.liked ? 'Yes' : 'No'}  </p>
            <p>Completed: {review.attributes.completed ? 'Yes' : 'No'}  </p>
            <button class="btn btn-link" onClick={this.hideEditReview}>Edit Review</button>{' '}<button class="btn btn-link" onClick={(id)=> this.handleDelete(review.id)}>Delete Review</button>

            {this.state.editReview ?
              <>
              <EditReview review={review} />
              </>
              :
              null
            }

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
    users: state.users,
    adventures: state.adventures,
    user: state.user
  }
}
export default connect(mapStateToProps, {deleteReview})(UserReviews)
