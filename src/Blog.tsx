import { useEffect, useState, FunctionComponent } from "react";
import { PostsAPIResponse, PicsumPhotosAPIResponse } from "./APIResponsesTypes";
import Skeleton from "react-loading-skeleton";

interface CombinedData {
  id: string;
  title: string;
  body: string;
  download_url: string;
}

const localCache: {
  blogData: CombinedData[];
} = { blogData: [] };

const Blog: FunctionComponent = () => {
  const [data, setData] = useState<CombinedData[]>([]);

  useEffect(() => {
    if (!localCache.blogData.length) {
      setData(Array(10).fill(undefined));
      void requestData();
    } else {
      setData(localCache.blogData);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPosts() {
    try {
      // from https://jsonplaceholder.typicode.com/
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const json = (await res.json()) as PostsAPIResponse[];
      return json || [];
    } catch (error) {
      console.log(error);
    }
  }

  async function requestImages() {
    try {
      // from https://picsum.photos/
      const res = await fetch("https://picsum.photos/v2/list?page=1&limit=10");
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
      localCache.blogData = combinedData;
    }
  }

  return (
    <div>
      <h1>Blog</h1>
      <ul className="grid grid-flow-cols sm:grid-cols-2 blogs">
        {data.map((d, index) => {
          return (
            <li key={index} className="pr-5">
              {d?.download_url ? (
                <img alt="" src={d.download_url} />
              ) : (
                <Skeleton height={300} width={300} />
              )}
              <h2>{d?.title || <Skeleton />}</h2>
              <p>{d?.body || <Skeleton count={3} />}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
