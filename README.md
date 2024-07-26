# DevJobs Jobs Board

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Best Practices](#best-practices)
- [Resources](#resources)

## Overview

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React.js" /> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" /> <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" /> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components" />

Inspired by [Frontend Mentor's coding challenges](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l), this is a job board app in which users are able to:

- View the optimal layout for each page depending on their device's screen size;
- See hover states for all interactive elements throughout the site;
- Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position;
- Be able to click a job from the index page so that they can read more information and apply for the job;
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences.

[🚀 Live Demo](https://unocorn-squad.github.io/job-posting-app/)

## Getting Started

### Prerequistes

Before getting started, install [Node.js](https://nodejs.org/) on your development machine. This should automatically install [npm](https://www.npmjs.com/) as well.

### Setting Up the Project

To run this project locally, follow the steps below:

1. Clone the repository

```bash
 git clone https://github.com/unocorn-squad/job-posting-app.git
```

2. Navigate to the cloned repository

```bash
  cd <name of the repo>
```

3. Install the project's dependencies

```bash
  npm install
```

4. Start the project!

```bash
  npm run dev
```

You're all set 🥳🎉 You should be able to view the project by navigating to http://localhost:5173/job-posting-app/.

## Project Structure

```
src
├── assets
├── components
├── pages
├── themes
└── ...
```

- `/assets`: Contains static resources such as images, documents, and fonts.
- `/components`: Contains reusable React components that encapsulate specific UI elements or functionality, promoting modular and maintainable code.
- `/pages`: Houses React components that represent distinct pages or routes within the application, each typically rendering a unique view or interface.
- `/themes`: Stores files related to styling and theming configurations, allowing for centralized management of design variables, colors, and styles across the application.

## Best Practices

### Development Process

1. **Create a Feature Branch**: Create a branch from the `main` branch with a descriptive name. Example: `jc/task-name-a`.
   > :bangbang: Before starting your work, make sure to pull the latest changes from the `main` branch and merge them into your feature branch!
2. **Commit Your Work Regularly**: Be as descriptive as possible in your commit messages. Example: “created and styled Component A” conveys what you did much more clearly than “styled a component”.

   > :bangbang: Make sure to commit your work at the end of the day.

3. **Develop, Test, and Verify Locally**

   - Complete development in your local environment.
   - Leave comments in your code to ensure clarity.
   - Test your own work thoroughly.

4. **Create a Pull Request for Code Review**

   - Create a pull request with a relevant name and description.
   - Add screenshots, links, and other context to help reviewers understand your changes.
   - Test your work in the dev environment if applicable.
   - Ensure you have at least two approvals (ideally one from a lead).

5. **Merge Your Pull Request**: Once all PR requirements are met, merge your feature branch into the main branch.

### Reviewing Code

Everyone is welcome to review the code! Here are some tips on how to provide valuable feedback:

- Ask questions!
  - Can you explain this part of the code?
  - Why did you decide to implement it this way?
- Share best practices
  - Provide examples or links to resources
- Offer suggestions to simplify and optimize their code based on popular coding principles
  - Keep It Simple, Stupid (KISS)
  - Don’t Repeat Yourself (DRY)
  - And many more...

### Import SVGs as React Components

Importing SVGs directly into components rather than using them as <img> elements provides several advantages:

- **Flexibility**: SVGs can be easily styled and manipulated using CSS and JavaScript within your React components.
- **Performance**: Directly importing SVGs can lead to faster load times compared to using them as separate image files.
- **Enhanced Capabilities**: SVGs imported as components allow for seamless integration of animations, interactivity, and dynamic changes based on application state.

To import SVGs as React components, see example below:

```js
import Logo from './assets/images/logo.svg?react';

const ExampleComponent = () => {
  return (
    <div>
      <Logo />
      {/* Additional JSX */}
    </div>
  );
};
```

### Creating Styled Components using Emotion

We will be leveraging Emotion, a powerful CSS-in-JS library, to style React components dynamically using JavaScript. One standout feature is the theme object, facilitating consistent theming throughout your application. Here's a guide on integrating and utilizing the theme object with Emotion's styled components:

1. **Define Your Theme**: Begin by defining a `theme` object that encapsulates essential design tokens like colors, spacing, fonts, and more. This centralizes your styling parameters for easier management and scalability.

```js
// light.js

export const theme = {
  //
  // Below all predefined variables, define your component variables
  //
  componentName: {
    bgColor: 'var(--color-violet)',
    color: 'var(--color-white)',
    // ...
  },
};
```

2. **Access Theme in Styled Components**: Utilize the `ThemeProvider` component from Emotion to provide the `theme` context to your entire application. Styled components can then access these theme properties via the `props.theme` object.

```jsx
import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: ${(props) => props.theme.spacing.medium};
  font-family: ${(props) => props.theme.fonts.body};
  cursor: pointer;
`;

const YourComponent = () => {
  return (
    <div>
      <h1>Themed Button Example</h1>
      <StyledButton>Click me!</StyledButton>
    </div>
  );
};

export default YourComponent;
```

For comprehensive guidance on constructing styled components with Emotion, refer to the [Emotion documentation](https://emotion.sh/docs/introduction).

## Resources

- [React.js](https://react.dev/learn)
- [Vite.js](https://vitejs.dev/guide/)
- [Emotion](https://emotion.sh/docs/introduction)
