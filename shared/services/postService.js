import { cache } from "react";
import axiosInstance from "./axiosInstance";
import { handleSuccess, handleError } from "./handlers";

/**
 * Fetches all posts from the API.
 * React cache deduplicates calls within the same render pass.
 * @returns {Promise<Array>} list of posts
 */
export const getAllPosts = cache(async () => {
  return axiosInstance
    .get("/posts")
    .then(handleSuccess)
    .catch(handleError);
});

/**
 * Fetches a single post by ID.
 * React cache ensures generateMetadata and the page component
 * share the same async context instead of making two requests.
 * @param {number|string} id - post ID
 * @returns {Promise<Object>} post object
 */
export const getPostById = cache(async (id) => {
  return axiosInstance
    .get(`/posts/${id}`)
    .then(handleSuccess)
    .catch(handleError);
});
    