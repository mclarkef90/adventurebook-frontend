export function createAdventure({title, description, image_url, user_id}) {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/adventures/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({title, description, image_url, user_id})
      }
    )
    .then(response => response.json())
    .then(adventure => dispatch({
      type: 'CREATE_ADVENTURE',
      payload: adventure
    }))
    }
  }
