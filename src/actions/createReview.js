export function createReview({comment, adventure_id, user_id, liked, completed}) {


  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/reviews/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({comment, adventure_id, user_id, liked, completed})
      }
    )
    .then(response => response.json())
    .then(data =>

      dispatch({
      type: 'CREATE_REVIEW',
      payload: data
    }))
    }
  }
