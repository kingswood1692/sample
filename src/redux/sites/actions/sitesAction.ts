import { sitesConstants } from "../constants/sitesConstants";

export const setLoading = () => ({
  type: sitesConstants.LOADING,
});

export const setError = (data) => ({
  type: sitesConstants.ERROR,
  payload: data,
});

export const setSiteLists = (data) => ({
  type: sitesConstants.SITE_LISTS_CONTENT,
  payload: data,
});

export const getSites = () => async (dispatch, getState, services) => {
  const { loading, sites } = getState().sitesContent;
  dispatch(setLoading());
  try {
    if (sites.length <= 0) {
      const getSites = await services.locator.container.content.getSites();
      let sitesArr = [];
      if (getSites.data.length >= sites.length) {
        getSites.data.map((site) => {
          if (!site.parentId) {
            sitesArr.push(site);
          }
        });
        dispatch(setSiteLists(sitesArr));
      }
    }
  } catch (e) {
    console.log(e);
  }
};

export const saveNewSite =
  (data: any) => async (dispatch, getState, services) => {
    const siteSate = getState().sitesContent;
    try {
      const saveSite = await services.locator.container.content.saveSite({
        requestedUrl: data.siteUrl,
        name: data.siteName,
      });
      console.log(saveSite);
    } catch (e) {
      console.log(e);
    }
  };
