import { expect, test, beforeEach } from "@jest/globals";
import { render, screen, act, within } from "@testing-library/react";
import { StaticRouter } from "react-router-dom";
import Clients from "../Clients";
import testClients from "./data/testClients";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  fetchMock.resetMocks();
});

test("shows loading skeleton before data fetch completes", () => {
  render(
    <StaticRouter>
      <Clients />
    </StaticRouter>
  );
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Clients"
  );
  const links = screen.queryAllByRole("link");
  expect(links).toHaveLength(0);
  const updateClientButtons = screen.queryAllByText("update");
  expect(updateClientButtons).toHaveLength(0);
  const deleteButtons = screen.queryAllByText("delete");
  expect(deleteButtons).toHaveLength(0);
});

test("fetches and displays a list of clients", async () => {
  fetchMock.mockResponse(JSON.stringify(testClients));
  render(
    <StaticRouter>
      <Clients />
    </StaticRouter>
  );
  await act(() => Promise.resolve());
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Clients"
  );
  const listitem = screen.queryAllByRole("listitem");
  expect(listitem).toHaveLength(10);
  const firstListItem = listitem[0];
  expect(firstListItem).toBeInTheDocument();
  expect(
    within(firstListItem).getByRole("heading", { level: 2 })
  ).toHaveTextContent("Romaguera-Crona");
  expect(within(firstListItem).getByText("hildegard.org")).toBeInTheDocument();
  expect(within(firstListItem).getByText("Kulas Light")).toBeInTheDocument();
  expect(within(firstListItem).getByText("Apt. 556")).toBeInTheDocument();
  expect(within(firstListItem).getByText("Gwenborough")).toBeInTheDocument();
  expect(within(firstListItem).getByText("92998-3874")).toBeInTheDocument();
  expect(within(firstListItem).getByText("Leanne Graham")).toBeInTheDocument();
  expect(
    within(firstListItem).getByText("Sincere@april.biz")
  ).toBeInTheDocument();
  expect(
    within(firstListItem).getByText("1-770-736-8031 x56442")
  ).toBeInTheDocument();
  expect(within(firstListItem).getByText("Update")).toBeInTheDocument();
  expect(within(firstListItem).getByText("Delete")).toBeInTheDocument();
});

test("adds a client", async () => {
  fetchMock.mockResponse(
    JSON.stringify({
      name: "John Smith",
      email: "test@test.com",
      address: {
        street: "123 Main Street",
        suite: "",
        city: "Springfield",
        zipcode: "12345",
      },
      phone: "123-456-7890",
      website: "blah.com",
      company: {
        name: "Acme Inc",
      },
      id: 11,
    })
  );

  render(
    <StaticRouter>
      <Clients />
    </StaticRouter>
  );

  let listItems = screen.queryAllByRole("listitem");
  expect(listItems).toHaveLength(10);
  userEvent.click(screen.getByText("Add"));
  const companyNameInput = screen.getByLabelText(/company name/i);
  const websiteInput = screen.getByLabelText(/website/i);
  const streetInput = screen.getByLabelText(/street/i);
  const cityInput = screen.getByLabelText(/city/i);
  const zipInput = screen.getByLabelText(/zip code/i);
  const fullNameInput = screen.getByLabelText(/full name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const phoneInput = screen.getByLabelText(/phone number/i);

  userEvent.type(companyNameInput, "Acme Inc");
  expect(companyNameInput).toHaveValue("Acme Inc");

  userEvent.type(websiteInput, "blah.com");
  expect(websiteInput).toHaveValue("blah.com");

  userEvent.type(streetInput, "123 Main Street");
  expect(streetInput).toHaveValue("123 Main Street");

  userEvent.type(cityInput, "Springfield");
  expect(cityInput).toHaveValue("Springfield");

  userEvent.type(zipInput, "12345");
  expect(zipInput).toHaveValue("12345");

  userEvent.type(fullNameInput, "John Smith");
  expect(fullNameInput).toHaveValue("John Smith");

  userEvent.type(emailInput, "test@test.com");
  expect(emailInput).toHaveValue("test@test.com");

  userEvent.type(phoneInput, "123-456-7890");
  expect(phoneInput).toHaveValue("123-456-7890");

  userEvent.click(screen.getByText("Add client"));

  await act(() => Promise.resolve());

  const addForm = screen.queryByText("add new client");
  expect(addForm).toBeNull();

  // expect this info to be appended to bottom of client list
  listItems = await screen.findAllByTestId(/loaded/i);

  expect(listItems).toHaveLength(11);
});

test("cancels adding a client", async () => {
  render(
    <StaticRouter>
      <Clients />
    </StaticRouter>
  );
  userEvent.click(screen.getByText("Add"));
  userEvent.click(screen.getByText("Cancel"));
  const addForm = screen.queryByText("add new client");
  expect(addForm).toBeNull();
});

test("deletes a client", async () => {
  render(
    <StaticRouter>
      <Clients />
    </StaticRouter>
  );
  let listItems = screen.queryAllByRole("listitem");
  expect(listItems).toHaveLength(11);
  // click delete button within 1st card
  const firstListItem = listItems[0];
  expect(firstListItem).toBeInTheDocument();
  const deleteBtn = within(firstListItem).getByText("Delete");
  userEvent.click(deleteBtn);

  await act(() => Promise.resolve());
  listItems = await screen.findAllByTestId(/loaded/i);

  expect(listItems).toHaveLength(10);
  const companyName = screen.queryByText("Romaguera-Crona");
  expect(companyName).toBeNull();
  const companyContactName = screen.queryByText("Leanne Graham");
  expect(companyContactName).toBeNull();
});

test("updates a client", async () => {
  fetch.mockResponse(
    JSON.stringify({
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "ehowell@deckow-crist.net",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: { lat: "-43.9509", lng: "-34.4618" },
      },
      phone: "010-692-6593 x09125",
      website: "deckow-crist.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    })
  );
  render(
    <StaticRouter>
      <Clients />
    </StaticRouter>
  );
  const listItems = screen.queryAllByRole("listitem");
  expect(listItems).toHaveLength(10);
  // click update button within 1st card
  const firstListItem = listItems[0];
  expect(firstListItem).toBeInTheDocument();
  const updateBtn = within(firstListItem).getByText("Update");
  userEvent.click(updateBtn);

  const websiteInput = screen.getByLabelText(/website/i);
  const emailInput = screen.getByLabelText(/email/i);
  expect(websiteInput).toHaveValue("anastasia.net");
  userEvent.clear(websiteInput);
  userEvent.type(websiteInput, "deckow-crist.net");
  expect(emailInput).toHaveValue("Shanna@melissa.tv");
  userEvent.clear(emailInput);
  userEvent.type(emailInput, "ehowell@deckow-crist.net");
  userEvent.click(screen.getByTestId("updateClientBtn2"));

  await act(() => Promise.resolve());

  // expect update form to be gone
  expect(screen.queryByTestId("updating0")).not.toBeInTheDocument();

  const loadedListItems = await screen.findAllByTestId(/loaded/i);
  expect(loadedListItems).toHaveLength(10);

  // locate website & email within first card and verify they have new values
  expect(
    within(firstListItem).getByText("deckow-crist.net")
  ).toBeInTheDocument();
  expect(
    within(firstListItem).getByText("ehowell@deckow-crist.net")
  ).toBeInTheDocument();
});
test("cancels updating a client", async () => {
  render(
    <StaticRouter>
      <Clients />
    </StaticRouter>
  );
  const listItems = screen.queryAllByRole("listitem");
  expect(listItems).toHaveLength(10);
  // click update button within 1st card
  const firstListItem = listItems[0];
  expect(firstListItem).toBeInTheDocument();
  const updateBtn = within(firstListItem).getByText("Update");
  userEvent.click(updateBtn);
  userEvent.click(screen.getByTestId("updateClientCancelBtn2"));

  // expect update form to be gone
  expect(screen.queryByTestId("updating0")).not.toBeInTheDocument();
  const loadedListItems = await screen.findAllByTestId(/loaded/i);
  expect(loadedListItems).toHaveLength(10);
});
