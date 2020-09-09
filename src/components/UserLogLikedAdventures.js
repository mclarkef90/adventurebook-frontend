import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class UserLogLikedAdventures extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    let id= this.props.userid
    let reviews= this.props.reviews.filter(review => review.attributes.user_id == id && review.attributes.liked == true)
    let adventureIds= reviews.map(review => ({id: review.attributes.adventure_id}))
    let result = this.props.adventures.filter(adventure => adventureIds.some(id => adventure.id == id.id));

    return(
      <>
        {result.map(adventure =>
          <ul key={adventure.id} class="card">
            <img src={adventure.attributes.image_url} className="profileImg" alt="activity" />

            <Link to={`/Adventures/${adventure.id}`}><h4>{adventure.attributes.title}</h4></Link>
            <button class="btn btn-link" onClick={this.hideEditAdventure}>Edit Adventure</button>{' '}<button class="btn btn-link" onClick={(id)=> this.handleDelete(adventure.id)}>Delete Adventure</button>


          </ul>
        )}
      </>
    )
  }
}


const mapStateToProps = state => {
  return {
    adventures: state.adventures,
    reviews: state.reviews
  }
}
export default connect(mapStateToProps)(UserLogLikedAdventures)
