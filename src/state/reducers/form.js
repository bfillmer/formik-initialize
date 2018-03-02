
import {FORM_INITIALIZE} from 'types'

// @TODO Handle rare case of multiple forms in the view at once.
const initialState = {}

const initialize = (state, {id, values}) => ({
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
