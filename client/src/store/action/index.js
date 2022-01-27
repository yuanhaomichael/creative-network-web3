function loginWithGoogle(googleLoginData) {
   
  return {
    type: "LOGIN_WITH_GMAIL",
    googleLoginData: googleLoginData
  };
}

function logoutWithGoogle(logout){
  return {
    type: 'LOGOUT_WITH_GOOGLE',
    logout: logout
  }
}

export { loginWithGoogle, logoutWithGoogle };
