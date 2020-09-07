export function deleteReview(id, adventure_id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/reviews/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      }
      })
    .then(response => response.json())
    .then(review => {
          dispatch({
      type: 'DELETE_REVIEW',
      payload: review})
    })
  }
}
