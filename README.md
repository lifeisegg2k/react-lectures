# react-lectures

lectures by [nomadcoders](https://nomadcoders.co/react-for-beginners/lobby)

## practice

- [Movie App](https://lifeisegg2k.github.io/react-lectures/)

## deploy to github.io

- `gh-pages` insall

    ```sh
    $ npm i gh-pages
    ```

- `package.json` update

    ```diff
    -     "eject": "react-scripts eject"
    +     "eject": "react-scripts eject",
    +     "deploy": "gh-pages -d build",
    +     "predeploy": "npm run build"
    ...
    -   }
    +   },
    +   "homepage": "https://<github user id>.github.io/<repogitory name>"
    ```

- deploy

    ```sh
    $ npm run deploy

    > react-for-beginners@0.1.0 predeploy
    > npm run build


    > react-for-beginners@0.1.0 build
    > react-scripts build

    Creating an optimized production build...
    Compiled with warnings.

    src/routes/Details.js
    Line 20:6:  React Hook useEffect has a missing dependency: 'getMovie'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

    Search for the keywords to learn more about each warning.
    To ignore, add // eslint-disable-next-line to the line before.

    File sizes after gzip:

    54.69 kB  build/static/js/main.0236ddf0.js
    114 B     build/static/css/main.90abb290.css

    The project was built assuming it is hosted at /react-lectures/.
    You can control this with the homepage field in your package.json.

    The build folder is ready to be deployed.

    Find out more about deployment here:

    https://cra.link/deployment


    > react-for-beginners@0.1.0 deploy
    > gh-pages -d build

    Published
    $
    ```

## caution

- `react-router-dom`は `5.3.0`を使用すること

    ```sh
    $ npm i react-router-dom@5.3.0
    ```
