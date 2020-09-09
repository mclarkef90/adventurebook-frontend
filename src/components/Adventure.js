import React from 'react';
import {connect} from 'react-redux';
import AddReview from './AddReview'

class Adventure extends React.Component {

  constructor(props){
    super(props)
    this.state={
      addReview: false
    }
  }

  hideAddReview = () => {
    this.setState(prevState => ({addReview: !this.state.addReview}))
  }

  render(){
    let id= this.props.match.params.id
    let adventure = this.props.adventures.filter(adventure => adventure.id == id)[0]
    let reviews= this.props.reviews.filter(review => review.attributes.adventure_id == id)
    return(
      <>
      {this.props.user ?
        <div className="container">
          <img src={adventure.attributes.image_url} className="profileImg" alt="activity"/>
          <h3>{adventure.attributes.title}</h3>
          <p>{adventure.attributes.description}</p>
          <p>Completions: {adventure.attributes.completions}</p>
          <p>Likes: {adventure.attributes.likes} </p>

          <h2>Reviews</h2>
            {reviews.map(review =>
              <ul key={review.id} class="card">
                <p>{review.attributes.comment}</p>
              </ul>
            )}

          <button class="btn btn-link" onClick={this.hideAddReview}>Write a Review</button>

          {this.state.addReview ?
            <>
            <AddReview user={this.props.user.id} adventure={adventure.id}/>
            </>
            :
            null
          }

        </div>
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

// const mapDispatchToProps = dispatch => {
//   return{
//     boundAddLike: (id, updatedLikes) => dispatch(addLike(id, updatedLikes))
//   }
// }

export default connect(mapStateToProps)(Adventure)
