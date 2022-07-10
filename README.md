# This is UI of the posts application

## Overview

This is just an front end part of the main aplication which is returning the `posts`

### Assumptions

- The UI is handling the case when there is no body or no title.
- In UI there is a validation for the positive integer. If user is not passing an positive integer then the UI will pull up all the posts.
- If an invalid number is passed then it will show the Not found case.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Web application

A web application which is pointing to the node backedn can be found [here](https://radiant-depths-50166.herokuapp.com/)

### Deployment

```bash
$ git push heroku master
```

To open the running instance

```bash
$ heroku open
```
