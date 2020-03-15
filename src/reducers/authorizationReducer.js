const defaultState = {
  authorization: {
    user: '',
    auth_token: ''
  }
};

const authorizationReducer = (state = defaultState.authorization, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        user: `${action.username}`,
        auth_token: `${action.auth_token}`
      };
    case 'SIGN_OUT':
      return {
        user: '',
        auth_token: ''
      };

    default:
      return state;
  }
};

export default authorizationReducer;