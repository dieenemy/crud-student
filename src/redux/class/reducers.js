import * as constants from './constants'

const initialState = {
    users: [],
    loading: false,
    error: null,
  }
  
  export default function users(state = initialState, action) {
    switch (action.type) {
      case constants.GET_STUDENTS_REQUEST:
        return {
          ...state,
          loading: true,
        }
      case constants.GET_STUDENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.users
        }
      case constants.GET_STUDENTS_FAILED:
        return {
          ...state,
          loading: false,
          error: action.message,
        }
      default:
        return state
    }
  }