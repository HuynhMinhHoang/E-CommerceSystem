export const refreshDataReducer = (state, action) => {
  switch (action.type) {
    case "REFRESH_DATA":
      return !state;
    default:
      return state;
  }
};
