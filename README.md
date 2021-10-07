# Entrega final React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![StrangeStore logo](./src/components/NavBar/strangeLogo.png "Logo")

This is a mock frontend for Strange Store, a clothes and accesories web store. It currently supports browsing items, filtering them by categories, accessing item details and adding them to the cart. Once the user decides it wants to buy the items, there's a cart page with a summary of the items and the grand total to pay. The user is then prompted for his or her name, phone and email with validations for each field. After the data is entered, an order is created with a unique ID. This ID can be used on the Orders page to retrieve the order summary without revealing the buyer's data.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!