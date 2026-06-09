/**
 * Handles a successful Axios response.
 * Extracts and returns the response data.
 *
 * @param {import("axios").AxiosResponse} response
 * @returns {any} response data
 */
export function handleSuccess(response) {
  return response.data;
}

/**
 * Handles an Axios error response.
 * Throws a structured error with a human-readable message.
 *
 * @param {import("axios").AxiosError} error
 * @throws {Error}
 */
export function handleError(error) {
  if (error.response) {
    // Server responded with a status outside 2xx
    const status = error.response.status;
    const message =
      error.response.data?.message ||
      error.response.statusText ||
      "An error occurred";

    throw new Error(`[${status}] ${message}`);
  } else if (error.request) {
    // Request was made but no response received
    throw new Error("No response from server. Please check your connection.");
  } else {
    // Something else happened while setting up the request
    throw new Error(error.message || "Unexpected error");
  }
}
