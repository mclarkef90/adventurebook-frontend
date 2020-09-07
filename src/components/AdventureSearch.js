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
        <br/>
          <input type="text" value={this.state.searchTerm} placeholder="Search Adventures" name="searchTerm" onChange={this.onInputChange}/>

          {this.state.currentDisplayed.map(adventure=>
            <ul key={adventure.attributes.title}>
              <img src={adventure.attributes.image_url} className="profileImg" alt="activity"/>
              <Link to={`/Adventures/${adventure.id}`}><h1>{adventure.attributes.title}</h1></Link>
              <p>{adventure.attributes.description}</p>
              <p>Likes: {adventure.attributes.likes}</p>
              <p>Completions: {adventure.attributes.completions}</p>
            </ul>
          )}
       </div>
      )
    }
}

export default (AdventureSearch)
