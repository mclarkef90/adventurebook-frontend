import React from 'react'
import { connect } from 'react-redux';
import {createReview} from '../actions/createReview'

class AddReview extends React.Component {

  constructor(props){
    super(props);
    this.state={
      comment: "",
      adventure_id: props.adventure,
      liked: false,
      user_id: props.user,
      completed: false
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
    this.props.createReview(this.state)
    console.log(this.state)
    this.setState({
      comment: "",
      adventure_id: "",
      liked: false,
      user_id: "",
      completed: false
    })
  }


  render() {
    console.log(this.props)

    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <h1>Add Review </h1>
        <label>Comment:</label>
        <input type="text" name="comment" value={this.state.comment} onChange={this.handleOnChange}/>
        <br/><br/>
        <label>Like:</label>
        <input type="checkbox" name="liked" value={true} onChange={this.handleOnChange} />
        <br/><br/>
        <label>Completed:</label>
        <input type="checkbox" name="completed" value={true} onChange={this.handleOnChange}/>
        <br/><br/>
        <input type="submit" value="Submit"/>{"  "}
        <button onClick={() => this.props.history.goBack()}>Close</button>
        </form>
      </div>
    )
  }
}


export default connect(null, {createReview})(AddReview)
