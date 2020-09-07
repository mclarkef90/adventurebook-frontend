export function deleteAdventure(id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/adventures/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      }
      })
    .then(response => response.json())
    .then(adventure => {
          dispatch({
      type: 'DELETE_ADVENTURE',
      payload: id})
    })
  }
}
