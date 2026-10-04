import { THEME_SET, COMMON_LOADING,TOGGLE_LOGIN } from "../actiontypes";

export const theme_set_action = (data) => dispatch => {
      dispatch({ type: THEME_SET, payload: data });
}
export const login_Action = (data = true) => dispatch => {
  dispatch({ type: TOGGLE_LOGIN, payload: data });
};
export const commonLoading_Action = (loading = true) => dispatch => {
  dispatch({ type: COMMON_LOADING, payload: loading });
};
