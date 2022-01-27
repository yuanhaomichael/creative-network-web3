const initialState = {
  googleLogin: null,
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_WITH_GMAIL": {
      return {
        ...state,
        googleLogin: action.googleLoginData,
      };
    }

    case "LOGOUT_WITH_GOOGLE": {
      return {
        ...state,
        googleLogin: null,
      };
    }

    default:
      return state;
  }
};
export default reducer;
