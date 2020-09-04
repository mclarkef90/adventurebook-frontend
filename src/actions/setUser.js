export function setUser(email, history){
  return(dispatch) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Acccepts': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    })
      .then(res => res.json())
      .then(user => {
        localStorage.setItem('userId', user.data.id)
        dispatch({
          type:'SET_USER',
          payload: user
        })
        history.push('/Profile')
        })
      }
    }
