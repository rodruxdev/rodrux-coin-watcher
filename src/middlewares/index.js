/* eslint-disable no-unused-vars */
const reportError = (store) => (next) => (actionInfo) => {
  if (actionInfo.type === 'ui/setError') {
    console.log(actionInfo.payload.message);
    console.log(actionInfo.payload.error?.response?.data?.error);
  }
  next(actionInfo);
};

export default reportError;
