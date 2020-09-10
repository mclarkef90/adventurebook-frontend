import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class UserLogAdventures extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    let id= this.props.userid
    let reviews= this.props.reviews.filter(review => review.attributes.user_id == id && review.attributes.completed == true)
    let adventureIds= reviews.map(review => ({id: review.attributes.adventure_id}))
    let result = this.props.adventures.filter(adventure => adventureIds.some(id => adventure.id == id.id));

    return(
      <>
        {result.map(adventure =>
          <ul key={adventure.id} class="card w-50">
            <img src={adventure.attributes.image_url} className="profileImg" alt="activity" />

            <Link to={`/Adventures/${adventure.id}`}><h4>{adventure.attributes.title}</h4></Link>

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
export default connect(mapStateToProps)(UserLogAdventures)
