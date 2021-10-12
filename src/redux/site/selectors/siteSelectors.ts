import { createSelector } from 'reselect'

const siteState = state => state.siteContent

export const siteSelector = createSelector(
  siteState,
  siteContent => siteContent
)