// Use a closure to keep track of results and errors;
const resultFunctions = (() => {
  let resultHandler = () => {};
  let errorHandler = () => {};
  let token = undefined;

  const setHandlers = (resultCallback, errorCallback, timeoutCallback, timeoutMs) => {
    timeoutCallback = timeoutCallback || (() => {
      throw new Error("Took too long!");
    });
    timeoutMs = timeoutMs || 100;
    resultHandler = resultCallback;
    errorHandler = errorCallback;

    token = setTimeout(timeoutCallback, timeoutMs);
  }
  const setResult = (value) => {
    clearTimeout(token);
    resultHandler(value);
  }

  const setError = (value) => {
    clearTimeout(token);
    errorHandler(value);
  }

  return {
    setResult: setResult,
    setError: setError,
    setHandlers: setHandlers
  }
})();

module.exports = resultFunctions;
