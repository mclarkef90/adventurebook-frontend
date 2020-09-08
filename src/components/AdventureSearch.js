import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// import NewComment from './NewComment'

class AdventureSearch extends React.Component{

    constructor(props){
      super(props)
      console.log(props)
    }
    state={
      searchTerm: "",
      currentDisplayed: this.props.adventures
    };


  onInputChange = (event) => {
    let newlyDisplayed = this.props.adventures.filter(adventure => adventure.attributes.description.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
    this.setState({
      searchTerm: event.target.value,
      currentDisplayed: newlyDisplayed
    })
  }

  render(){
    console.log(this.props.adventures)
    console.log(this.state)
     return(
      <div>
          <input class="input-group input-group-sm mb-3" type="text" value={this.state.searchTerm} placeholder="Search Adventures" name="searchTerm" onChange={this.onInputChange}/>
          <ul class="container">
          {this.state.currentDisplayed.map(adventure=>
            <ul key={adventure.attributes.title} class="card">
              <img class="card-img-top" src={adventure.attributes.image_url} alt="activity"/>
              <Link to={`/Adventures/${adventure.id}`}><h3>{adventure.attributes.title}</h3></Link>
              <p>{adventure.attributes.description}</p>
              <p>Likes: {adventure.attributes.likes}</p>
              <p>Completions: {adventure.attributes.completions}</p>
            </ul>

          )}
          </ul>
       </div>
      )
    }
}

export default (AdventureSearch)
