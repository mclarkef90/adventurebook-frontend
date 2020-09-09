import React from 'react'
import { connect } from 'react-redux';
import {editReview} from '../actions/editReview'

class EditReview extends React.Component {

  constructor(props){
    super(props);
    this.state={
      comment: props.review.attributes.comment,
      adventure_id: props.review.attributes.adventure_id,
      liked: props.review.attributes.liked,
      user_id: props.review.attributes.user_id,
      completed: props.review.attributes.completed,
      id: props.review.id
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.editReview(this.state)
    this.setState({
      comment: "",
      adventure_id: "",
      liked: "",
      user_id: "",
      completed: "",
      id: ''
    })
  }


  render() {
    console.log(this.state)

    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h3>Edit Review </h3>

            <div class="form-group">
              <label>Comment:</label>
              <input type="text" name="comment" value={this.state.comment} onChange={this.handleOnChange}/>
            </div>

            <div class="form-group">
              <label>{this.state.liked ? 'UnLike:' : 'Like'}</label>
              <input type="checkbox" name="liked" value={!this.state.liked} onChange={this.handleOnChange} />
            </div>

            <div class="form-group">
              <label>{this.state.completed ? 'Mark Incomplete:' : 'Completed'}</label>
              <input type="checkbox" name="completed" value={!this.state.completed} onChange={this.handleOnChange}/>
            </div>

            <input class="btn btn-link" type="submit" value="Submit"/>{"  "}

        </form>
      </div>
    )
  }
}


export default connect(null, {editReview})(EditReview)
