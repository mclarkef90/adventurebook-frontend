export default function manageApp(state=
  {users: [],
  adventures: [],
  reviews: [],
  user: null}, action){

  switch (action.type){

    case 'SET_USER':
      return {
        ...state, user: action.payload
      }

    case 'FETCH_USERS':
      return {
        ...state, users: action.payload
      }

    case 'FETCH_ADVENTURES':
      return {
        ...state, adventures: action.payload
      }

    case 'FETCH_REVIEWS':
      return {
        ...state, reviews: action.payload
      }

    default:
      return state
  }

}
