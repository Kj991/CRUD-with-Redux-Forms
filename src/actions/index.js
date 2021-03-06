import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';

const ROOT_URL = 'http://jsonplaceholder.typicode.com';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  console.log("passed this");
  const request = axios.get(`${ROOT_URL}/posts/${id}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}
