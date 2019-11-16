// Use a closure to keep track of results and errors;
const resultFunctions = (() => {
  let resultHandler = () => {};
  let errorHandler = () => {};

  const setHandlers = (resultCb, errorCb) => {
    resultHandler = resultCb;
    errorHandler = errorCb;
  }
  const setResult = (value) => resultHandler(value);
  const setError = (value) => errorHandler(value);
  return {
    setResult: setResult,
    setError: setError,
    setHandlers: setHandlers
  }
})();

module.exports = resultFunctions;
