// Custom error class to represent taking too long to `setResult`/`setError`.
class TimeoutError extends Error {}

// Use a closure to keep track of results and errors;
const resultFunctions = (() => {
  let result = undefined;
  let error = undefined;

  const setResult = (value) => { result = value };
  const setError = (value) => { error = value };
  const getResult = (timeoutMillis) => {
    timeoutMillis = timeoutMillis || 100; // Default to 100ms

    const startTime = new Date().getTime();

    while (result === undefined && error === undefined) {
      const currentTime = new Date().getTime();
      if (currentTime - startTime > timeoutMillis) {
        throw new TimeoutError("Took too long to produce a result!");
      }
    }

    if (error) {
      const message = error;
      error = undefined;
      throw new Error(message);
    } else {
      const ret = result;
      result = undefined;
      return ret;
    }
  }

  return {
    setResult: setResult,
    setError: setError,
    getResult: getResult
  }
})();

module.exports = resultFunctions;
