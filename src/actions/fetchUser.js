export function fetchUser(id){
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Acccepts': 'application/json'
      },
    })
      .then(res => res.json())
      .then(user => {
        dispatch({
          type:'SET_USER',
          payload: user
        })})
      }
    }
