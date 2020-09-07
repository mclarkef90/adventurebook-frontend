export default function manageApp(state=
  {users: [],
  adventures: [],
  reviews: [],
  user: null,
  loading: false}, action){

  switch (action.type){

    case 'HANDLE_LOADING':
      return {
        ...state, adventures: [...state.adventures],
        loading: true
      }

    case 'SET_USER':
      return {
        ...state, user: action.payload.data,
      }

    case 'FETCH_USERS':
      return {
        ...state, users: action.payload.data,

      }

    case 'FETCH_ADVENTURES':
      return {
        ...state, adventures: action.payload.data, loading: false
      }

    case 'FETCH_REVIEWS':
      return {
        ...state, reviews: action.payload.data
      }

    case 'CREATE_USER':
      console.log(state.users)
        return {
          ...state, users: [...state.adventures, action.payload.data],
        }

    case 'ADD_LIKE':
      let likesUpdate= [...state.adventures].filter(adventure => adventure.id !== action.payload.data.id)
        return {
          ...state, adventures: [action.payload.data, ...likesUpdate],
        }

    case 'EDIT_USER':
      let usersEdit= [...state.users].filter(user => user.id !== action.payload.data.id)
        return {
          ...state, users: [...usersEdit, action.payload.data]
        }

    case 'DELETE_USER':
     let userslist= [...state.users].filter(user => user.id !== action.payload)
       return {
         ...state, users: [...userslist]
       }

     case 'DELETE_ADVENTURE':
       let adventuresDelete= [...state.adventures].filter(adventure => adventure.id !== action.payload)
         return {
           ...state, adventures: [...adventuresDelete]
         }

     case 'CREATE_ADVENTURE':
        return {...state, adventures: [...state.adventures, action.payload.data],
        }

      case 'EDIT_ADVENTURE':
        let adventuresEdit= [...state.adventures].filter(adventure => adventure.id !== action.payload.data.id)
          return {
            ...state, adventures: [...adventuresEdit, action.payload.data]
          }

      case 'CREATE_REVIEW':

      let updatedAdventure= [...state.adventures.filter(adventure => adventure.id !== action.payload.adventure.data.id)]
         return {...state, reviews: [...state.reviews, action.payload.review.data], adventures: [...updatedAdventure, action.payload.adventure.data]
         }


       case 'DELETE_REVIEW':

       let deleteReview= [...state.reviews.filter(review => review.id !== action.payload)]
          return {...state, reviews: [...deleteReview]
          }

        case 'EDIT_REVIEW':
        
        let editReview= [...state.reviews.filter(review => review.id !== action.payload.data.id)]
           return {...state, reviews: [...editReview, action.payload.data]
           }

    default:
      return state
  }

}
