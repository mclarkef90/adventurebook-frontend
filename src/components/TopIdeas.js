import React from 'react';

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
            <p>{this.state.adventure.title}</p>
          <br/>
          <h2> User with the Best Ideas (based on Ratings and Likes) </h2>
            {console.log(this.state.user)}
            <p>{this.state.user.username}</p>
        </>
      :
        null
      }

      </>
    )
  }
}
