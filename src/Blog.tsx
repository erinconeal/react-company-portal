import {
  useEffect,
  useState,
  FunctionComponent,
  useReducer,
  useRef,
} from "react";
import { PostsAPIResponse, PicsumPhotosAPIResponse } from "./APIResponsesTypes";
import Skeleton from "react-loading-skeleton";
import useInfiniteScroll from "./useInfiniteScroll";
import useLazyLoading from "./useLazyLoading";

export interface CombinedData {
  id: string;
  title: string;
  body: string;
  download_url: string;
}

type pageState = {
  page: number;
};

type pageAction = { type: "ADVANCE_PAGE" };

const Blog: FunctionComponent = () => {
  const [data, setData] = useState<CombinedData[]>([]);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [images, setImages] = useState<PicsumPhotosAPIResponse[]>([]);
  const [posts, setPosts] = useState<PostsAPIResponse[]>([]);
  const bottomBoundaryRef = useRef(null);

  const pageReducer = (state: pageState, action: pageAction) => {
    switch (action.type) {
      case "ADVANCE_PAGE":
        return { ...state, page: state.page + 1 };
      default:
        return state;
    }
  };
  const [pager, pagerDispatch] = useReducer(pageReducer, { page: 1 });

  useEffect(() => {
    void requestData(pager.page);
  }, [pager.page]); // eslint-disable-line react-hooks/exhaustive-deps

  useLazyLoading(".card-top", data);
  useInfiniteScroll(bottomBoundaryRef, pagerDispatch);

  useEffect(() => {
    const combinedData: CombinedData[] = [];

    posts.forEach((item: PostsAPIResponse, i: number) => {
      combinedData.push(Object.assign({}, item, images[i]));
    });
    setData(combinedData);
  }, [images, posts]); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPosts(page: number) {
    try {
      // from https://jsonplaceholder.typicode.com/
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      const json = (await res.json()) as PostsAPIResponse[];
      setPosts((posts) => posts.concat(json));
      return posts || [];
    } catch (error) {
      console.log(error);
    }
  }

  async function requestImages(page: number) {
    try {
      // from https://picsum.photos/
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
      const json = (await res.json()) as PicsumPhotosAPIResponse[];
      setImages((images) => images.concat(json));
      return images || [];
    } catch (error) {
      console.log(error);
    }
  }

  async function requestData(page: number) {
    try {
      setIsFetchingData(true);
      await Promise.all([requestPosts(page), requestImages(page)]);
      setIsFetchingData(false);
    } catch (error) {
      console.log(error);
      setIsFetchingData(false);
    }
  }

  return (
    <div>
      <h1>Blog</h1>
      <div>
        <ul className="grid grid-flow-cols sm:grid-cols-2 blogs">
          {data.map((d, index) => {
            return (
              <li key={index} className="pr-5 card-top">
                {d?.download_url ? (
                  <img
                    alt=""
                    src={
                      "https://picsum.photos/id/870/300/300?grayscale&blur=2"
                    }
                    data-src={d.download_url}
                  />
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
      {isFetchingData && (
        <div className="text-center bg-secondary m-auto p-3">
          <p className="m-0 text-black">Getting data</p>
        </div>
      )}
      <div id="page-bottom-boundary" ref={bottomBoundaryRef}></div>
    </div>
  );
};

export default Blog;
