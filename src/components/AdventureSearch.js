import React from 'react'
import {connect} from 'react-redux'
import { addLike } from '../actions/addLike';
import {fetchUsers} from '../actions/fetchUsers'
import {fetchAdventures} from '../actions/fetchAdventures'
import {fetchReviews} from '../actions/fetchReviews'
import {fetchUser} from '../actions/fetchUser'
// import NewComment from './NewComment'

class AdventureSearch extends React.Component{

  constructor(props){
    super(props)

    this.state={
      searchTerm: "",
      currentlyDisplayed: this.props.adventures
    };

    this.onInputChange = this.onInputChange.bind(this)
  }

  componentDidMount(){
    this.props.boundFetchUser();
    this.props.boundFetchUsers();
    this.props.boundFetchAdventures();
    this.props.boundFetchReviews();
  }

  onInputChange(event) {
    let newlyDisplayed = this.props.adventures.filter(adventure => adventure.attributes.description.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
    this.setState({
      searchTerm: event.target.value,
      currentlyDisplayed: newlyDisplayed
    })
  }

  render(){
     return(
      <div>
      {this.props.adventures ?
        <>
          <br/>
          <input type="text" value={this.state.searchTerm} placeholder="Search Adventures" name="searchTerm" onChange={this.onInputChange}/>

          {this.state.currentlyDisplayed.map(adventure=>
          <ul key={adventure.attributes.title}>
          <img src={adventure.attributes.image_url} className="profileImg" alt="activity"/>
          <h1>{adventure.attributes.title}</h1>
          <p>{adventure.attributes.description}</p>
          </ul>
          )}
          <br/>
          <br/>
        </>
        :
        null
        }
      </div>
    )}
}

const mapStateToProps = state => {
  return{
    user: state.user,
    users: state.users,
    adventures: state.adventures.data,
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return{
    boundFetchUser: () => dispatch(fetchUser()),
    boundFetchUsers: () => dispatch(fetchUsers()),
    boundFetchAdventures: () => dispatch(fetchAdventures()),
    boundFetchReviews: () => dispatch(fetchReviews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdventureSearch)
