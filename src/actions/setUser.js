import {BASE_URL} from '../index'

export function setUser(email, history){
  return(dispatch) => {
    fetch((`${BASE_URL}`+'/login'), {
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
      .catch(error => {
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: error
        })
        window.location.reload()
      })
      }
    }
