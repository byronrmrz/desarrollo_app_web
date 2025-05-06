const logger = (store) => (next) => (action) => {
  console.group(action);
  console.log("Te action: ", action);
  const result = next(action);
  console.log("El nuevo estado: ", store.getState());
  console.groupEnd();
  return result;
};
export default logger;
