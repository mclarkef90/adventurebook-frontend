export function editAdventure({title, description, image_url, id}) {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/adventures/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({title, description, image_url})
      }
    )
    .then(response => response.json())
    .then(adventure => dispatch({
      type: 'EDIT_ADVENTURE',
      payload: adventure
    }))
    }
  }
