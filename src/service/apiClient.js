import { API_URL } from "./constants";

async function login(email, password) {
  return await post("login", { email, password }, false);
}

async function register(email, password) {
  await post("users", { email, password }, false);
  return await login(email, password);
}

async function createProfile(userId, firstName, lastName, githubUrl, bio) {
  return await patch(`users/${userId}`, {
    firstName,
    lastName,
    githubUrl,
    bio,
  });
}

async function getPosts() {
  const res = await get("posts");
  return res.data.posts;
}

async function postPost(newPost) {
  const res = await post("posts", newPost);
  return res.data.post;
}

async function getUserByName(firstName) {
  const res = await get(`users?first_name=${firstName}`);
  return res.data.users;
}

async function post(endpoint, data, auth = true) {
  return await request("POST", endpoint, data, auth);
}

async function patch(endpoint, data, auth = true) {
  return await request("PATCH", endpoint, data, auth);
}

async function get(endpoint, auth = true) {
  return await request("GET", endpoint, null, auth);
}

async function getUsers() {
    const res = await get('users')
    return res.data.users
}

async function request(method, endpoint, data, auth = true) {
  const opts = {
    headers: {
      "Content-Type": "application/json",
    },
    method,
  };

  if (method.toUpperCase() !== "GET") {
    opts.body = JSON.stringify(data);
  }

  if (auth) {
    opts.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  const response = await fetch(`${API_URL}/${endpoint}`, opts);

  return response.json();
}

async function deletePost(postId) {
  console.log(postId)
  const token = localStorage.getItem('token'); 
  const response = await fetch(`${API_URL}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete the post');
  }

  return response.json();
}

async function editPost(postId, updatedContent) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/posts/${postId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedContent), 
  });
  if (!response.ok) {
    throw new Error('Failed to edit the post');
  }
  return response.json(); 
}



export {
    login,
    getPosts,
    register,
    createProfile,
    getUsers, 
    postPost, getUserByName, deletePost, editPost
}





