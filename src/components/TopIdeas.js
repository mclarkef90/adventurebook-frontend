import React from 'react';
import {Link} from 'react-router-dom'

export default class TopIdeas extends React.Component{

  state={}

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/todays_best')
    .then(response => response.json())
    .then(data => {
      this.setState({
        adventure: data[0][0],
        user: data[1]
      })
    })
  }

  render(){
    return(
      <>
      {this.state.adventure ?
        <>

        <h1>Today's Best Ideas</h1>
          <h2>Most Liked Adventure Idea</h2>
            {console.log(this.state.adventure)}
            <Link to={`/adventures/${this.state.adventure.id}`}><h3>{this.state.adventure.title}</h3></Link>
          <br/>
          <h2> User with the Best Ideas (based on Ratings and Likes) </h2>
            {console.log(this.state.user)}
            <h3>{this.state.user.username}</h3>

        </>
      :
        null
      }

      </>
    )
  }
}
