import React from 'react';
import {connect} from 'react-redux';
import { addLike } from '../actions/addLike';
import {Redirect} from 'react-router-dom'

class Adventure extends React.Component {

  constructor(props){
    super(props)
  }

  likeHandler = (event) => {
    event.persist()
    let id= parseInt(event.target.dataset.id)
    let likes= parseInt(event.target.dataset.likes)
    let updatedLikes= likes + 1
    this.props.boundAddLike(id, updatedLikes);
  }

  handleLoading = () => {
    console.log(this.props)
    if(this.props.adventures == undefined){
      return <div>Loading</div>
    }
    else {
      let id= this.props.match.params.id
      let adventure = this.props.adventures.filter(adventure => adventure.id == id)[0]

      console.log(adventure)
      return (
      <>
            <img src={adventure.attributes.image_url} className="profileImg" alt="activity"/>
            <h1>{adventure.attributes.title}</h1>
            <p>{adventure.attributes.description}</p>
            <p>Like: <button data-id= {adventure.id} data-likes={adventure.attributes.likes} onClick={this.likeHandler}>{adventure.attributes.likes}</button> </p>
            </>
          )
        }
      }



  render(){
    return(
    <>
      {this.handleLoading()}
      {console.log(this.props.adventures)}
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

const mapDispatchToProps = dispatch => {
  return{
    boundAddLike: (id, updatedLikes) => dispatch(addLike(id, updatedLikes))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adventure)
