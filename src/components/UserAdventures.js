import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteAdventure} from '../actions/deleteAdventure'
import {editAdventure} from '../actions/editAdventure'
import EditAdventure from './EditAdventure'

class UserAdventures extends React.Component{

  constructor(props){
    super(props)
    this.state={
      editAdventure: false
    }
  }

  handleDelete = (id) => {
    this.props.deleteAdventure(id)
  }

  hideEditAdventure = () => {
    this.setState(prevState => ({editAdventure: !this.state.editAdventure}))
  }

  render(){
    console.log(this.props.adventures)
    let id= this.props.userid
    let adventures= this.props.adventures.filter(adventure => adventure.attributes.user_id == id)
    return(
      <>
        {adventures.map(adventure=>
          <ul key={adventure.id} class="card">
            <img src={adventure.attributes.image_url} className="profileImg" alt="activity" />

            <Link to={`/Adventures/${adventure.id}`}><h4>{adventure.attributes.title}</h4></Link>
            <button class="btn btn-link" onClick={this.hideEditAdventure}>Edit Adventure</button>{' '}<button class="btn btn-link" onClick={(id)=> this.handleDelete(adventure.id)}>Delete Adventure</button>

            {this.state.editAdventure ?
              <>
              <EditAdventure adventure={adventure} />
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
    adventures: state.adventures,
  }
}
export default connect(mapStateToProps, {deleteAdventure, editAdventure})(UserAdventures)
