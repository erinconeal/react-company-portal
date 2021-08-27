# react-company-portal

> Company portal web app using React, Typescript and Tailwind CSS

[Live site](http://company-portal.surge.sh)

## How to navigate this project

- Responsive CSS using Tailwind CSS: [Example code](src/style.css)
- This application fetches data from a few APIs:
  - [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)
  - [https://picsum.photos/](https://picsum.photos/)
  - [https://randomuser.me/documentation](https://randomuser.me/documentation)
- Unit tests using React Testing Library: [Example code](src/__tests__/Clients.test.js)

## Why I built this project this way

- This app is relatively simple so I decided not to use a state management library like Redux and opted to instead use `useState`. I may in the future replace that with react-query.
- I used a mix of functional and class components in this app to get experience with both APIs.
- The Tailwind CSS framework provides easy, responsive styles to add to markup. It also has some nifty plugins for forms, typography, etc.
- Testing Library is the recommended library in the React community. I cover the essential features of the app with tests.

## If I had more time

- improve Suspense fallback in App.tsx
- better form validation: currently uses the Validation API
- add animation to signal updating/deleting/adding a client

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

Available at [http://localhost:1234](http://localhost:1234) in your browser.

### Compiles and minifies for production

```
npm run build
```

### Run unit tests

```
npm run test
```
