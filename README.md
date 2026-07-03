# Wacky News Reader

An easy peasy headline news reader that enable you to grasp the up-to-date news headlines in light mode, dark mode and ... 90s mode! 🎉

The web application has been deployed: https://clarmso.github.io/wacky-news-reader/.

## Quick Start 🚀

1. Create an account from [The New York Times Developer Network](https://developer.nytimes.com/apis). Create an API key and enable "Top Stories API".
1. Create a file `.env` in the topmost directory of this project. Put the API key (_not_ the secret) in the file:
   `REACT_APP_NYT_API_KEY=<API Key>`.
1. Install the dependencies: `npm ci`.
1. Start the development server: `npm run start`
1. Open `http://localhost:3000` from a browser.

## Deploy to GitHub Pages 🚀

The site is automatically deployed to GitHub Pages when changes are pushed to `main` via GitHub Actions.

You need to define one repository secret under Settings > Secrets from the Github project's page:

- `API_KEY`: The API key from The New York Times Developer Network.

You also need to enable GitHub Pages in the repository settings under Settings > Pages, and set the source to "GitHub Actions".
