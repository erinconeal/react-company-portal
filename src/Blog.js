import { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    requestPosts();
    requestImages();
  }, []);

  async function requestPosts() {
    // from https://jsonplaceholder.typicode.com/
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    console.log("posts", json);
    setPosts(json);
  }

  async function requestImages() {
    // from https://picsum.photos/
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const json = await res.json();
    console.log("pics", json);
    setImages(json);
  }

  return <h1>Blog</h1>;
};

export default Blog;
