import React from 'react'
import { editAdventure } from '../actions/editAdventure'
import { connect } from 'react-redux';

class EditAdventure extends React.Component {

  constructor(props){
    super(props);
    this.state={
      title: props.adventure.attributes.title,
      description: props.adventure.attributes.description,
      image_url: props.adventure.attributes.image_url,
      id: props.adventure.id
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    this.props.boundeditAdventure(this.state)
    console.log(this.state)
    this.setState({
      title: "",
      description: "",
      image_url: "",
      id: ""
    })
  }

  render() {
    console.log(this.props)

    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <div class="form-group">
            <h3>Edit Adventure </h3>
            <label>Title:</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange}/>
          </div>

          <div class="form-group">
            <label>Description:</label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleOnChange}/>
          </div>

          <div class="form-group">
            <label>Image URL:</label>
            <input type="text" name="image_url" value={this.state.image_url} onChange={this.handleOnChange}/>
          </div>

          <input class="btn btn-link" type="submit" value="Submit"/>{"  "}


        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { boundeditAdventure: (userEntry) => dispatch(editAdventure(userEntry))
}}


export default connect(null, mapDispatchToProps)(EditAdventure)
