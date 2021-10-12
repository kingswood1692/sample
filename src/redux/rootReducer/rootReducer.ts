import { combineReducers } from 'redux'
import homeReducers from '../home/reducers/homeReducers'
import sitesReducer from '../sites/reducers/sitesReducer'
import siteReducer from '../site/reducers/siteReducer'

// COMBINED REDUCERS
const reducers = {
  homepageContent: homeReducers,
  sitesContent: sitesReducer,
  siteContent: siteReducer
}

export default combineReducers(reducers)