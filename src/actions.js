
import {createAction} from 'redux-actions'

import {SUBMIT_LOGIN, FORM_INITIALIZE} from 'types'

// LOGIN
// Attach our Formik actions as meta-data to our action.
export const submitLogin = createAction(
  SUBMIT_LOGIN,
  ({values}) => values,
  ({actions}) => actions
)

// Initialize a form with specific values.
export const initializeForm = createAction(
  FORM_INITIALIZE,
  (id, values) => ({id, values})
)
