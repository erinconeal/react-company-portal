import { useEffect, useState } from "react";

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    requestData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPosts() {
    try {
      // from https://jsonplaceholder.typicode.com/
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  }

  async function requestImages() {
    try {
      // from https://picsum.photos/
      const res = await fetch("https://picsum.photos/v2/list?limit=100");
      const json = await res.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  }

  async function requestData() {
    const [posts, images] = await Promise.all([
      requestPosts(),
      requestImages(),
    ]);
    const combinedData = posts.map((item, i) =>
      Object.assign({}, item, images[i])
    );
    console.log("data", combinedData);
    setData(combinedData);
  }

  return (
    <div>
      <h1>Blog</h1>
      <ul className="grid grid-flow-cols sm:grid-cols-2 lg:grid-cols-3 blogs">
        {data.map((d) => {
          return (
            <li key={d.id}>
              <img alt="" src={d.download_url} />
              <h2>{d.title}</h2>
              <p>{d.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
