import { siteConstants } from "../constants/siteConstants";

const defaultState = {
  loading: false,
  error: null,
  site: null,
  subPages: null,
  generateLoading: false,
};

export default function siteReducer(
  state: any = defaultState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case siteConstants.LOADING:
      return { ...state, loading: true };
    case siteConstants.ERROR:
      return { ...state, error: action.payload };
    case siteConstants.GENERATE_LOADING:
      return { ...state, generateLoading: true };
    case siteConstants.SET_SUB_PAGES:
      return { ...state, subPages: action.payload };
    case siteConstants.SITE_CONTENT:
      return {
        ...state,
        site: action.payload,
        loading: false,
        generateLoading: false,
      };
    default:
      return state;
  }
}
