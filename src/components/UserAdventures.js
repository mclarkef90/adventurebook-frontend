import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteAdventure} from '../actions/deleteAdventure'
import {editAdventure} from '../actions/editAdventure'
import EditAdventure from './EditAdventure'

class UserAdventures extends React.Component{

  constructor(props){
    super(props)
  }

  handleDelete = (id) => {
    this.props.deleteAdventure(id)
  }

  render(){
    console.log(this.props.adventures)
    let id= this.props.userid
    let adventures= this.props.adventures.filter(adventure => adventure.attributes.user_id == id)
    return(
      <>
        {adventures.map(adventure=>
          <ul key={adventure.id}>
            <Link to={`/Adventures/${adventure.id}`}><h4>{adventure.attributes.title}</h4></Link>
            <button >Edit Adventure</button>{' '}<button onClick={(id)=> this.handleDelete(adventure.id)}>Delete Adventure</button>
            <EditAdventure adventure={adventure} />
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
