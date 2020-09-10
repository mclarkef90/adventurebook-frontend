import React from 'react'
import {Link} from 'react-router-dom'

export default function TopUser(props){
  let id= props.match.params.id
  let adventures= props.adventures.filter(adventure=> adventure.attributes.user_id == id)
  let user= props.users.filter(user => user.id == id)[0]
  console.log(user)

  return(
    <>
    {props.user ?
      <>
        <h1>Ideas by {user.attributes.username}</h1>
          {adventures.map(adventure =>
            <ul key={adventure.id}>
            <img src={adventure.attributes.image_url} className="profileImg" alt="activity"/>
            <Link to={`/Adventures/${adventure.id}`}><h1>{adventure.attributes.title}</h1></Link>
            <p>{adventure.attributes.description}</p>
            <p>Completions: {adventure.attributes.completions}</p>
            <p>Likes: {adventure.attributes.likes} </p>
            </ul>
            )}
      </>
      :
      <h3>Please Log In or Sign Up</h3>

    }
    </>
  )
}
