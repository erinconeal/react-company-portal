import { expect, test, beforeEach } from "@jest/globals";
import { render, screen, act } from "@testing-library/react";
import Blog from "../Blog";
import { StaticRouter } from "react-router-dom";
import JSONPlaceholderPosts from "./data/JSONPlaceholderPosts";
import PicsumPhotos from "./data/PicsumPhotos";

beforeEach(() => {
  fetch.resetMocks();
  window.IntersectionObserver = jest.fn(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));
});

test("displays loading skeleton initially", async () => {
  render(
    <StaticRouter>
      <Blog />
    </StaticRouter>
  );
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Blog");
  const images = screen.queryAllByRole("img");
  expect(images).toHaveLength(0);
  await act(() => Promise.resolve());
});

test("displays a list of blog cards", async () => {
  const imagesAPI = fetch.mockResponseOnce(JSON.stringify(PicsumPhotos));
  const postsAPI = fetch.mockResponseOnce(JSON.stringify(JSONPlaceholderPosts));
  render(
    <StaticRouter>
      <Blog />
    </StaticRouter>
  );
  await act(() => Promise.all([imagesAPI, postsAPI]));
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Blog");
  const listitem = screen.queryAllByRole("listitem");
  expect(listitem).toHaveLength(11);
  const images = screen.queryAllByRole("img");
  expect(images).toHaveLength(11);
  expect(images[0].dataset.src).toBe("1.jpg");
  const headingLevel2 = screen.queryAllByRole("heading", { level: 2 });
  expect(headingLevel2).toHaveLength(11);
  expect(headingLevel2[0].textContent).toBe(
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  );
  const loadingMessage = screen.queryByText("Getting data");
  expect(loadingMessage).toBeNull();
});
