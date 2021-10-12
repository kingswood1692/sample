import { sitesConstants } from "../constants/sitesConstants";

const defaultState = {
  loading: false,
  error: null,
  sites: [],
};

export default function formReducer(
  state: any = defaultState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case sitesConstants.LOADING:
      return { ...state, loading: true };
    case sitesConstants.ERROR:
      return { ...state, error: action.payload };
    case sitesConstants.SITE_LISTS_CONTENT:
      return {
        ...state,
        sites: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
