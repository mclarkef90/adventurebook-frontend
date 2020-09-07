export function editUser(id, {username, email, biography, profile_img}) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({username, email, biography, profile_img})
      }
    )
    .then(response => response.json())
    .then(user => dispatch({
      type: 'EDIT_USER',
      payload: user
    }))
  }
}
