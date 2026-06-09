import axiosInstance from "./axiosInstance";
import { handleSuccess, handleError } from "./handlers";

/**
 * Fetches all users (Client side — no React.cache, called inside useEffect).
 */
export async function getAllUsers() {
  return axiosInstance
    .get("/users")
    .then(handleSuccess)
    .catch(handleError);
}
