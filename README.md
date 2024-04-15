# CV App

**CV App** is a single-page application designed to help professionals showcase their skills and experiences effectively. This application leverages React, Redux, and React Router to offer a smooth and interactive user experience.

## Features

- **Single-Page Application**: Built with React Router for seamless navigation without page reloads.
- **Shared Components**: Includes reusable UI components such as Box, Button, and Expertise to ensure a consistent design across the application.
- **Portfolio**: Features a dynamic portfolio section with filtering capabilities, allowing users to showcase their work efficiently.
- **Skills Management**: Users can add, visualize, and delete their skills with a dynamic form and visual proficiency levels.
- **Responsive Design**: Ensures that the application is accessible and aesthetically pleasing on a variety of devices.

## Technical Overview

### Components

- **Shared Components**: Designed to maintain uniformity and reduce redundancy. Components such as `Box`, `Button`, and `Expertise` are used throughout the application to keep the UI consistent.
- **Timeline Component**: Manages the display of chronological events such as education or career milestones. This component is dynamic, loading external data and handling state.
- **Skills Component**:
  - Allows users to add and display skills.
  - Features dynamic form management using Formik for adding skills with validation.
  - Skills are stored in `localStorage` for persistence across sessions.

### Redux Integration

- **Data Management**: Uses Redux and Redux Toolkit for state management, encapsulating the lifecycle of asynchronous requests.
- **Redux DevTools**: Integrated for monitoring state changes and assisting in debugging.
- **Mock Server**: Utilizes Mirage JS to simulate API endpoints for a realistic development environment without the need for an actual backend.

### Utilities

- **Form Handling**: Utilizes Formik for managing form states and performing validations with detailed error messages.
- **Error Handling**: Implements robust error handling across the application, ensuring that any data-fetching errors are gracefully managed.

### Testing

- **Unit Testing**: Uses Jest alongside React Testing Library to write and execute tests for components and utility functions.
- **Code Quality**: Configured Jest to enforce coverage thresholds, integrated with Husky for running tests pre-commit to maintain high code standards.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
