import { createSelector } from 'reselect'

const sitesState = state => state.sitesContent

export const sitesSelector = createSelector(
  sitesState,
  sitesContent => sitesContent
)