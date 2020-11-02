# First Next App with Redux example

## About this project

I built this project mostly to showcase how I think about using state with a library like Redux. I've kept everything else clean and simple.

## Get this project up & running

Clone the project

```bash
git clone git@github.com:QuentinWatt/first-next-app-with-redux.git first-react-project-with-next
```

Run a yarn install to make sure all packages are installed

```bash
yarn
```

Start the dev server

```bash
yarn dev
```

## Starting a next project with Redux.

This app was intially setup from the Next with Redux example app, which can be created with the yarn command below:

```bash
npx create-next-app --example with-redux with-redux-app
# or
yarn create next-app --example with-redux with-redux-app
```

## Redux Reducer Structure

The Redux store is initially created in 1 central store file, which can get quite long.

Smaller files can be easier to manage, and so I prefer to split my code into separated modules, located in the '/modules' directory. This is a structure I have enjoyed working with, and if you're wondering how I came up with this structure, it's from one of the Vue core developers. Take a look at [Chris Fritz's enterprise boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/state/modules/users.js).

## Styling

For styling, I love working with [Tailwind CSS](https://tailwindcss.com/). I find the utility based approach to building components so convenient. One of the best advantages is that you can build components without ever having to leave the HTML. This also saves time searching for classes when you have to change styling later.
