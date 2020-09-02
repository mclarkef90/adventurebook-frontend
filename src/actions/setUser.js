export function setUser(email, password){
  return(dispatch) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Acccepts': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(user => {
        localStorage.setItem('userId', user.id)

        dispatch({
          type:'SET_USER',
          payload: user
        })})
      }
      }
