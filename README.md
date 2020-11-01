# First Next App with Redux example

## Starting a next project with Redux.

This app was intially setup from the Next with Redux example app, which can be created with the yarn command below:

```bash
npx create-next-app --example with-redux with-redux-app
# or
yarn create next-app --example with-redux with-redux-app
```

### Redux Project Structure

The Redux store is initially created in 1 central store file, which can get quite long.

Smaller files can be easier to manage, and so I prefer to split my data into separated modules, located in the '/modules' directory. I found this gives the project some structure, and makes the files much easier to read and manage.

If you're wondering how I came up with this structure, it's because this is very similar to how the Vue core developers manage modules. Take a look at [Chris Fritz's enterprise boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/state/modules/users.js).
