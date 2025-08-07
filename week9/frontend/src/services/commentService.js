import axios from "axios";

const API_URL = "http://localhost:8000";

export const getComments = async (postId) => {
  const res = await axios.get(`${API_URL}/posts/${postId}/comments`);
  return res.data;
};

export const addComment = async (postId, comment) => {
  const res = await axios.post(`${API_URL}/posts/${postId}/comments`, {
    content: comment,
  });
  return res.data;
};
