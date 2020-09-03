export function addLike(id, updatedLikes) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/adventures/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        likes: updatedLikes
      })
      }
    )
    .then(response => response.json())
    .then(adventure => dispatch({
      type: 'ADD_LIKE',
      payload: adventure
    }))
  }
}
