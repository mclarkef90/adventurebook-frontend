export function createUser({username, password, password_confirmation, email, profile_img, biography}) {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({user:{ username, password, password_confirmation, email, profile_img, biography}

      })
      }
    )
    .then(response => response.json())
    .then(user => dispatch({
      type: 'CREATE_USER',
      payload: user
    }))
    }
  }
