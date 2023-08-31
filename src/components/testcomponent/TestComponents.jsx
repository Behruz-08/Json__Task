import { useState, useEffect } from "react";
import axios from "axios";

const TestComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const postsResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const usersResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const postsData = postsResponse.data;
      const usersData = usersResponse.data;

      const updatedPosts = postsData.map((post) => {
        const user = usersData.find((user) => user.id === post.userId);
        return {
          ...post,
          user: {
            name: user.name,
            username: user.username,
            email: user.email,
          },
        };
      });

      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addPost = () => {
    const newPost = {
      title: "New Post",
      body: "This is a new post",
      user: {
        name: "John Doe",
        username: "johndoe",
        email: "johndoe@example.com",
      },
    };

    setPosts([...posts, newPost]);
  };

  const sortPosts = () => {
    const sortedPosts = [...posts].sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });

    setPosts(sortedPosts);
  };

  return (
    <div>
      <button onClick={addPost}>Add Post</button>
      <button onClick={sortPosts}>Sort Posts</button>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>Author: {post.user.name}</p>
          <p>Username: {post.user.username}</p>
          <p>Email: {post.user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TestComponent;
