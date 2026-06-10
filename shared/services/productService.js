import { cache } from "react";
import axios from "axios";
import { handleSuccess, handleError } from "./handlers";

const productAxios = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Fetches all products from DummyJSON API.
 * @returns {Promise<Array>} list of products
 */
export const getAllProducts = cache(async () => {
  return productAxios
    .get("/products")
    .then(handleSuccess)
    .catch(handleError);
});

/**
 * Fetches a single product by ID.
 * @param {number|string} id - product ID
 * @returns {Promise<Object>} product object
 */
export const getProductById = cache(async (id) => {
  return productAxios
    .get(`/products/${id}`)
    .then(handleSuccess)
    .catch(handleError);
});
