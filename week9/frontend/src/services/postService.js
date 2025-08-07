import axios from "axios";

const API_URL = "http://localhost:8000";

export const getPosts = async () => {
  const res = await axios.get(`${API_URL}/posts`);
  return res.data;
};

export const getPostById = async (id) => {
  const res = await axios.get(`${API_URL}/posts/${id}`);
  return res.data;
};

export const addPost = async (post) => {
  const res = await axios.post(`${API_URL}/posts`, post);
  return res.data;
};

export const deletePost = async (id) => {
  await axios.delete(`${API_URL}/posts/${id}`);
};
