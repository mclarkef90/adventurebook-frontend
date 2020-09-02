export function fetchReviews(){
  return(dispatch) => {
    fetch('http://localhost:3000/api/v1/reviews', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Acccepts': 'application/json'
      },
    })
      .then(res => res.json())
      .then(reviews => {
        dispatch({
          type:'FETCH_REVIEWS',
          payload: reviews
        })})
      }
    }
