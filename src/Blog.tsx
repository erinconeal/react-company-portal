import { useEffect, useState, FunctionComponent } from "react";
import { PostsAPIResponse, PicsumPhotosAPIResponse } from "./APIResponsesTypes";

interface CombinedData {
  id: string;
  title: string;
  body: string;
  download_url: string;
}

const Blog: FunctionComponent = () => {
  const [data, setData] = useState([] as CombinedData[]);

  useEffect(() => {
    void requestData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPosts() {
    try {
      // from https://jsonplaceholder.typicode.com/
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = (await res.json()) as PostsAPIResponse[];
      return json || [];
    } catch (error) {
      console.log(error);
    }
  }

  async function requestImages() {
    try {
      // from https://picsum.photos/
      const res = await fetch("https://picsum.photos/v2/list?limit=100");
      const json = (await res.json()) as PicsumPhotosAPIResponse[];
      return json || [];
    } catch (error) {
      console.log(error);
    }
  }

  async function requestData() {
    const [posts, images] = await Promise.all([
      requestPosts(),
      requestImages(),
    ]);
    const combinedData: CombinedData[] = [];
    if (posts && posts.length && images && images.length) {
      posts.forEach((item: PostsAPIResponse, i: number) => {
        combinedData.push(Object.assign({}, item, images[i]));
      });
      setData(combinedData);
    }
  }

  return (
    <div>
      <h1>Blog</h1>
      <ul className="grid grid-flow-cols sm:grid-cols-2 blogs">
        {data.map((d) => {
          return (
            <li key={d.id} className="pr-5">
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
