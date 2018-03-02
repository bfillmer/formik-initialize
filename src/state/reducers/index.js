
import {combineReducers} from 'redux'
import {curiReducer as location} from '@curi/redux'

import {reducer as form} from 'state/reducers/form'

export const reducers = combineReducers({
  form,
  location
})
