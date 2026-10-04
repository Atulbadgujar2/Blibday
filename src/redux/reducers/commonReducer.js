import { THEME_SET, COMMON_LOADING, TOGGLE_LOGIN} from "../actiontypes";
const initialState = {
  themeData:"light",
  commonLoading:false,
  isLoggedIn:false
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_SET:
      return { ...state, themeData: action.payload };
    case COMMON_LOADING:
      return { ...state, commonLoading: action.payload };
    case TOGGLE_LOGIN:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};

export default commonReducer;