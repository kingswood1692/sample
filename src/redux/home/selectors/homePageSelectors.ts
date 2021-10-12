import { createSelector } from 'reselect'

const homepageState = state => state.homepageContent

export const homePageSelectors = createSelector(
  homepageState,
  homepageContent => homepageContent
)