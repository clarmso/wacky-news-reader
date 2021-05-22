# Wacky News Reader

An easy peasy headline news reader that enable you to grasp the up-to-date news headlines in light mode, dark mode and ... 90s mode! 🎉

The web application has been deployed: https://wacky-news-reader.web.app/.

## Quick Start 🚀

1. Create an account from [The New York Times Developer Network](https://developer.nytimes.com/apis). Create an API key and enable "Top Stories API".
1. Create a file `.env` in the topmost directory of this project. Put the API key (_not_ the secret) in the file:
   `REACT_APP_NYT_API_KEY=<API Key>`.
1. Install the dependencies: `npm ci`.
1. Start the development server: `npm run start`
1. Open `http://localhost:3000` from a browser.

## Running Tests ✅

The component tests are located in `src/__tests__`.

1. Run jest in watch mode: `npm run test:jest`

The end-to-end tests are located in `cypress/integration`. Here is how you run the test in the interactive runner:

1. Ensure Chrome and Firefox browsers have been installed.
1. Run the development server. Ensure `http://localhost:3000` is up and running from the previous section.
1. Open Cypress: `npx cypress open`.
1. Select the desired browser (Chrome or Firefox) and click the test to run.

Cypress also offers us to run the test in headless mode: `npx cypress run --headless --browser chrome`.

## Deploy to Firebase 🔥

1. Log in to your Google account via a browser.
1. Create a Firebase project and register this web application: https://firebase.google.com/docs/web/setup.
1. Log in to your Google account via the CLI: `npx firebase login`.
1. Ensure Firebase can preview and host the website: `npx firebase emulators:start`. The web application should be running on `http://localhost:5000`.
1. Deploy the web application: `npx firebase deploy --only hosting`.

You can also use the Github Actions to deploy. You need to define two repository secrets under Settings > Secrets from the Github project's page.

- `API_KEY`: The API key from The New York Times Developer Network.
- `FIREBASE_TOKEN`: The login token given by `npx firebase login:ci`.

## Feedbacks 📝

Please feel free to send me a [message](https://clarmso.typeform.com/to/BW4tWf).
