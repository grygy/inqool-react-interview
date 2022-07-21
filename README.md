# JS/TS Interview Project (React)

This is a small project for a React TypeScript interview.

## Goal

Create a UI web application that retrieves and displays the user repositories and organizations in GitHub.

## UX/UI

It's up to you. It should probably include an input to enter the username, one area to display the user's repositories, and another area to show the organizations. 

## Retrieving data

To make things easier, we have committed a `github-api.ts` file with the REST APIs needed to retrieve the information.

**Pro tip:** GitHub user *kiwi* have repositories and organizations as well.

## Requirements 

- Use functional components with hooks
- The app should be responsive
- Use ES6 syntax (such as arrow functions, destructuring, async/await, etc.)
- Show some spinner (or similar) when information is fetching
- Use some UI component library such as [MUI](https://mui.com/) or [Chakra UI](https://chakra-ui.com/)
- Deploy the project somewhere (e.g., [GitHub pages](https://pages.github.com/) or [Netlify](https://www.netlify.com/))
 
## Bootstrapping the project

Up to you, for React we recommend [create-react-app](https://create-react-app.dev/docs/getting-started/) with [TypeScript template](https://create-react-app.dev/docs/adding-typescript) if you opt-in for TypeScript).

```bash
yarn create react-app github-finder --template typescript
```

## Submitting the solution

**DO NOT FORK this repository** 

Download `github-api.ts`, create your own repository, and add the solution there.

## Bonus (don't need to be in the below specific order)
- Deal with errors coming from the backend
- Try to keep clean git history with meaningful messages
- Add React Context if relevant (e.g., dark mode)
- Show common tools used for your daily development environment (linters, code formatter, and so on)
- Use types with TypeScript
