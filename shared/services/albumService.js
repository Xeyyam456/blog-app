import { cache } from "react";
import axiosInstance from "./axiosInstance";
import { handleSuccess, handleError } from "./handlers";

/**
 * Fetches all albums (Server side).
 */
export const getAllAlbums = cache(async () => {
  return axiosInstance
    .get("/albums")
    .then(handleSuccess)
    .catch(handleError);
});

/**
 * Fetches a single album by ID (Server side / SSR).
 * @param {string|number} id
 */
export const getAlbumById = cache(async (id) => {
  return axiosInstance
    .get(`/albums/${id}`)
    .then(handleSuccess)
    .catch(handleError);
});
