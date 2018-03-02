
import {FORM_INITIALIZE} from 'types'

const initialState = {}

const initialize = (state, {id, values}) => ({
  ...state,
  [id]: values
})

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FORM_INITIALIZE:
      return initialize(state, payload)
    default:
      return state
  }
}
