import { siteConstants } from "../constants/siteConstants";

import XMLParser from "react-xml-parser";

export const setLoading = () => ({
  type: siteConstants.LOADING,
});

export const setError = (data) => ({
  type: siteConstants.ERROR,
  payload: data,
});

export const setSiteLists = (data) => ({
  type: siteConstants.SITE_CONTENT,
  payload: data,
});

export const setGenerateLoading = () => ({
  type: siteConstants.GENERATE_LOADING,
});

export const setGenerateDone = () => ({
  type: siteConstants.GENERATE_DONE,
});

export const setSubPages = (data) => ({
  type: siteConstants.SET_SUB_PAGES,
  payload: data
})

export const getSiteContent =
  (site) => async (dispatch, getState, services) => {
    const siteContent = getState().siteContent;
    const subPagesArr = [];
    try {
      if (site && typeof site !== undefined) {
        dispatch(setLoading());
        const getSites = await services.locator.container.content.getSites();
        const siteData = await services.locator.container.content.getSite(site);
        
        getSites.data.map(site => {
          if(site.parentId === siteData.data.getSiteDetails[0]._id) {
            subPagesArr.push(site);
          }
        })

        dispatch(setSubPages(subPagesArr))
        
        if (siteData.data && siteData.data !== null) {
          dispatch(setSiteLists(siteData.data));
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

export const saveNewSite =
  (data: any) => async (dispatch, getState, services) => {
    console.log(JSON.stringify(data));
    const siteSate = getState().sitesContent;
    try {
      const saveSite = await services.locator.container.content.saveSite(data);
      console.log(saveSite);
    } catch (e) {
      console.log(e);
    }
  };

// export const getSubPages = (data) => async (dispatch, getState, services) => {
//   const {
//     siteName,
//     siteId
//   } = data;
//   const sitemaps = await services.container.content.xmlToJson(
//     `${siteName}/sitemap.xml`
//   );
//   const xml = new XMLParser().parseFromString(sitemaps);
//   const subPages = xml.children;
//   const subPagesArray = [];

//   await subPages.map((loc) => {
//     loc.children.map((url) => {
//       if (url.name === "loc") {
//         if (siteName !== url.value) {
//           subPagesArray.push({
//             parentId: siteId,
//             requestedUrl: url.value,
//             name: url.value
//               .replace(`${siteName}`, "")
//               .replace(/[^a-zA-Z ]/g, " "),
//           });
//         }
//       }
//     });
//   });
//   dispatch(saveNewSite(subPagesArray));
// };

export const generateNewPsiReport =
  (siteId, siteName) => async (dispatch, getState, services) => {
    // console.log(siteName);
    const siteContent = getState().siteContent;
    const siteDetail = siteContent.site.getSiteDetails[0];

    dispatch(setGenerateLoading());
    if (siteId === siteDetail._id) {
      try {
        const siteData = {
          sites: [
            {
              siteId: siteDetail._id,
              siteUrl: siteDetail.requestedUrl,
            },
          ],
        };
        const pageInsights =
          await services.locator.container.content.generatePsiResult(siteData);
        if (pageInsights.success) {
          dispatch(getSiteContent(siteName));
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
