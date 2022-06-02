import axios from 'axios';
const API=axios.create({baseURL:'http://localhost:8000'})

export const fetchPosts = () => axios.get('/posts');

export const createPost=async (newPost)=> await API.post('/posts',newPost);

export const updatePost=(id,updatedPost)=>API.patch(`/posts/${id}`,updatedPost);

export const deletePost=(id)=>API.delete(`/posts/${id}`);


export const likePost=(id)=>API.patch(`/posts/${id}/likepost`);




export const signIn=(formData)=>API.post('/user/signin',formData);

export const signUp=(formData)=>API.post('/user/signup',formData)
