import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import useAuth from '../../hooks/useAuth';
import Post from '../post';
import { getPosts, getUsers } from '../../service/apiClient';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const { token } = useAuth();
  const userID = jwtDecode(token).userId;

  console.log(JSON.stringify(posts, null, 2));

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            name={`${post.author.firstName} ${post.author.lastName}`}
            date={post.createdAt}
            content={post.content}
            comments={post.comments}
            isLoggedIn={users.filter((user) => user.id === userID)}
          />
        );
      })}
    </>
  );
};

export default Posts;
