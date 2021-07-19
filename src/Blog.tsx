import {
  useEffect,
  useState,
  FunctionComponent,
  useReducer,
  useRef,
  Dispatch,
} from "react";
import { PostsAPIResponse, PicsumPhotosAPIResponse } from "./APIResponsesTypes";
import Skeleton from "react-loading-skeleton";
import useInfiniteScroll from "./useInfiniteScroll";
import useLazyLoading from "./useLazyLoading";

interface CombinedData {
  id: string;
  title: string;
  body: string;
  download_url: string;
}

type imgState = {
  images: PicsumPhotosAPIResponse[];
  fetching: boolean;
};

type imgAction =
  | { type: "STACK_IMAGES"; images: PicsumPhotosAPIResponse[] }
  | { type: "FETCHING_IMAGES"; fetching: boolean };

type pageState = {
  page: number;
};

type pageAction = { type: "ADVANCE_PAGE" };

const localCache: {
  blogData: CombinedData[];
} = { blogData: [] };

const Blog: FunctionComponent = () => {
  const [data, setData] = useState<CombinedData[]>([]);
  const imgReducer = (state: imgState, action: imgAction) => {
    switch (action.type) {
      case "STACK_IMAGES":
        return { ...state, images: state.images.concat(action.images) };
      case "FETCHING_IMAGES":
        return { ...state, fetching: action.fetching };
      default:
        return state;
    }
  };

  const pageReducer = (state: pageState, action: pageAction) => {
    switch (action.type) {
      case "ADVANCE_PAGE":
        return { ...state, page: state.page + 1 };
      default:
        return state;
    }
  };

  const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 });
  const [imgData, imgDispatch] = useReducer(imgReducer, {
    images: [],
    fetching: true,
  });

  const bottomBoundaryRef = useRef(null);
  useLazyLoading("XXXX", imgData.images);
  useInfiniteScroll(bottomBoundaryRef, pagerDispatch);

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

  async function requestImages(data: pageState, dispatch: Dispatch<imgAction>) {
    try {
      dispatch({ type: "FETCHING_IMAGES", fetching: true });
      // from https://picsum.photos/
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${data.page}&limit=10`
      );
      const json = (await res.json()) as PicsumPhotosAPIResponse[];
      dispatch({ type: "STACK_IMAGES", images: json });
      dispatch({ type: "FETCHING_IMAGES", fetching: false });
      return json || [];
    } catch (error) {
      console.log(error);
      dispatch({ type: "FETCHING_IMAGES", fetching: false });
    }
  }

  async function requestData() {
    const [posts, images] = await Promise.all([
      requestPosts(),
      requestImages(pager, imgDispatch),
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
