## NASA-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
And mostly inspired by the youtube video: https://youtu.be/nTeuhbP7wdE

to run project it's require to generate AUTH key from NASA site\
website: https://api.nasa.gov/

### Prerequisite to run in local
* node 1.14
* NASA auth key

```
# to build
:$ cd nasa-app
:$ npm install

# create .env file in root and save AUTH key
> REACT_APP_NASA_API_KEY=auth-key

# to start server
:$ npm start

# open browser -> localhost:3000
```

### Prerequisite to run in docker

* docker & docker compose
```
# export your auth key in terminal
:$ export REACT_APP_NASA_API_KEY=auth-key

# run docker compose to create build
:$ docker-compose up --build
```

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
