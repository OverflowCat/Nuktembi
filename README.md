# Nuktembi

## Run

If you haven't done so already, install the [Tabris CLI](https://www.npmjs.com/package/tabris-cli) on your machine:

```
npm i tabris-cli -g
```

Then in the project directory, type:

```
npm start
```
Or choose "npm: start" from the Visual Studio Code task runner to make compile errors appear in the "Problems" view.

This will start a Tabris.js code server at a free port and print its URL to the console. The app code can then be [side-loaded](https://tabrisjs.com/documentation/3.1/developer-app.html#run-your-app) in the [developer app](https://tabrisjs.com/documentation/3.1/developer-app.html) by entering that URL.

Alternatively you can also call the Tabris CLI directly:

```
tabris serve -a -w
```

This the same as running `npm start`. The `-w` switch starts the compiler in watch mode, meaning you do not have to re-start the server after each code change, and `-a` causes the app to reload automatically as well.

## Test

This project includes a TSLint configuration that helps preventing common mistakes in your code. Most IDEs can display TSLint-based hints directly in the editor, but you can also run the tool explicitly via:

```
npm test
```

This will also check for compile errors.

The initial rules defined in `tslint.json` are supposed to warn against problematic patterns, but do not enforce a specific code style. You may want to [adjust them](https://palantir.github.io/tslint/rules/) according to your taste.

## Build

The app can be built using the online build service at [tabrisjs.com](https://tabrisjs.com) or locally using [Tabris.js CLI](https://www.npmjs.com/package/tabris-cli).

See [Building a Tabris.js App](https://tabrisjs.com/documentation/3.1/build.html) for more information.
