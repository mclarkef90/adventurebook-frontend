export function fetchAdventures(){
  return(dispatch) => {
    fetch('http://localhost:3000/api/v1/adventures', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Acccepts': 'application/json'
      },
    })
      .then(res => res.json())
      .then(adventures => {
        dispatch({
          type:'FETCH_ADVENTURES',
          payload: adventures
        })})
      }
    }
