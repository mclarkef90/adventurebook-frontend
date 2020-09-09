import React from 'react'
import { createAdventure } from '../actions/createAdventure'
import { connect } from 'react-redux';

class AddAdventure extends React.Component {

  constructor(props){
    super(props);
    this.state={
      title: "",
      description: "",
      image_url: "",
      user_id: props.userid
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
    this.props.boundcreateAdventure(this.state)
    console.log(this.state)
    this.setState({
      title: "",
      description: "",
      image_url: "",
      user_id: ""
    })
  }

  render() {
    console.log(this.props)

    return(
      <div class="card">
        <form onSubmit={this.handleOnSubmit}>
          <h3>Add Adventure </h3>
            <div class="form-group">
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
  return { boundcreateAdventure: (userEntry) => dispatch(createAdventure(userEntry))
}}


export default connect(null, mapDispatchToProps)(AddAdventure)
