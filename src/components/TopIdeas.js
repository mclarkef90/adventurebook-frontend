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
      <div className="container">
      {this.state.adventure ?
        <>

        <h2>Today's Best Ideas</h2>
          <h3>Most Liked Adventure Idea</h3>
            {console.log(this.state.adventure)}
            <Link to={`/Adventures/${this.state.adventure.id}`}><h3>{this.state.adventure.title}</h3></Link>
            <img src={this.state.adventure.image_url} alt="highest rated activity" className="profileImg"/>
          <br/><br/>
          <h3> User with the Best Ideas (based on Ratings and Likes) </h3>
            {console.log(this.state.user)}
          <Link to={`/Users/${this.state.user.id}`}><h3>{this.state.user.username}</h3></Link>
          <img src={this.state.user.profile_img} alt="highest rated user" className= "profileImg" />

        </>
      :
        null
      }

      </div>
    )
  }
}
