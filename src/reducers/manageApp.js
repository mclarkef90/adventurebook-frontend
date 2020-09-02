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

    default:
      return state
  }

}
