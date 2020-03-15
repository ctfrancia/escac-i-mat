const defaultState = {
  pages: {
    loading: true,
    visible: false,
  }
};
const pagesReducer = (state = defaultState.pages, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return {
        loading: true
      };

    case 'DONE_LOADING':
      return {
        loading: false
      };

    case 'IS_VISIBLE':
      return {
        visible: true
      };

    case 'NOT_VISIBLE':
    return{
      visible: false
    };

    default:
      return state;
  }
};

export default pagesReducer;