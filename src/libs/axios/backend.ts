import axios from "axios";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/v1";

export const backend = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
});
