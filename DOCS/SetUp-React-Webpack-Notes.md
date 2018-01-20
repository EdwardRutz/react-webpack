# React.js Essential Training

[LL: React.js Essential Training](https://www.linkedin.com/learning/react-js-essential-training/what-is-react)

These are notes,log and code snippets from the project with final code in the app.
- To review code, see the app.

## Concepts
- Using Chrome and Firefox with React development
- Efficient rendering with React
- Using pure React
- Refactoring elements with JSX
- Babel inline and static transpiling
- Creatng a Webpack build
- Loading JSON with Webpack
- Adding CSS/SCSS to a Webpack Build, using import statements
- Migrating to Webpack 3


-------------------------------------------------

- Start Webpack-dev-server: ```npm start```  
- Build bundle with webpack:  ```npm run build```

-------------------------------------------------

## 1. What is React.js?

## 2. Intro to JSX and Babel

### Install

- TODO.make sure to install the presets before running webpack
- To run webpack without installing globally:  ```./node_modules/.bin/webpack```

```
npm install babel-preset-react@6/16/- --save-dev
npm install babel-preset-latest@6.16.0 --save-dev
npm install babel-preset-stage-0@6.16.0 --save-dev
```
- stage-0 includes experimental features of the ES specs 
  - "Stage 0 - Strawman: just an idea, possible Babel plugin."
  - [Babel Plugins](https://babeljs.io/docs/plugins/)

- Run Babel command ```babel ./src/index.js --out-file ./dist/bundle.js ```


#### Install and Configure Webpack

- Webpack creates a bundle from the package.json

- Setup webpack.config.js and install...
  - npm install webpack@1.13.3 --save-dev
  - npm install babel-loader@6.2.5 --save-dev

- Run webpack, if you receive a not found error then either...
  - Install globally:  ```sudo npm install -g webpack@1.13.3```
  - Run locally:  ```./node_modules/.bin/webpack```



#### SetUp an NPM build script to run webpack...
- In package.json delete test command and add a build commmand ```"build": "webpack"```
- RESULT:
```
    {
      "name": "webpack3",
      "version": "1.0.0",
      "description": "Demonstrating and playing with webpack 3",
      "main": "index.js",
      "scripts": {
        "build": "webpack"
      },
```
- Run ```npm run build``` in terminal to run webpack and generate bundle.
  - ```npm run build``` is more convenient than ```node_modules/.bin/webpack```



------------------------------------------

##### Alternative to Webpack-dev-server,  Add a Watch command to automate building bundle.js
- If the webpack-dev-server does not work, this is an alternative

- In package.json add ```"watch": "webpack --w"``` to the scripts object...
- RESULT: 
```
       "scripts": {
          "build": "webpack",
          "watch": "webpack --w"
        },
```
- Next run ```npm run watch``` to monitor changes
- RESULT:
```
Webpack is watching the files…
```

------------------------------------------
- ERROR: Site will not load, receive an error: ```cannot GET /```
- FIXED: Turns out I did not have a bundle.js in the assets folder. Ran the folder and now it works.
------------------------------------------


#### Loading JSON Files as Modules
- Load dependencies and json data using webpack
- Import files as modules


- Install react and reactDOM dependencies in project directory
```
  npm install react@15.3.2 --save-dev
  npm install react-dom@15.3.2 --save
```

- Make a lib.js and titles.json files.
- lib.js will import .json data and display it in react components


#### Use Webpack to Bundle CSS
- Bundle CSS instead of using inline styles
- Configure to use inline styles


##### Install loaders


  - ```npm i autoprefixer-loader --save-dev```

      ------------------------------------------
      - autoprefixer-loader is depreciated.
      - NPM recommends running [postcss-loader](https://www.npmjs.com/package/postcss-loader)
      ------------------------------------------


      - ERROR: version 3.2.0 would not install: ```npm install auto-prefixer-loader@3.2.0 --save-dev``` 
      - FIX: Was able to install without the version number: ```npm i autoprefixer-loader --save-dev```

  - Install ```npm install css-loader@0.25.0 --save-dev```
  - Install the peer dependency node sass, this is needed to install the sass-loader
    - ```npm install node-sass@3.10.1 --save-dev```
  - Install ```npm install sass-loader@4.0.2 --save-dev```
  - Install ```npm style-loader@0.13.1 --save-dev```

------------------------------------------
- ERROR: Webpack-dev-server would not start
- FIX: A comma was missing after a curly bracket in lib.js
- When I add another object at the end of an array or object, I forget to add a common to the object above since the last object doesn't need a comma.
- Can a comma be added to the last object anyway for consistency?
------------------------------------------

- ERROR: Module build failed, syntax error
- FIX: Had a semi-colon after color instead of a colon, e.g. color:
------------------------------------------



#### Migrate to Webpack 3
- Upgrade to webpack to recent version, webpack 3.
- Need to add a few changes to the webpack.config.js to upgrade

- webpack 3 uses the word "rules" instead of the plural "loaders" in webpack.config.js
- but uses the singular "loader" elsewhere
```
          module: {
          rules: [
            {
```
- In the webpack.config.js, babel-loader is a string instead of an array so remove the brackets.




--------------------------------------------------------------------------------------------------
### Setting Up Dependecies for React

##### SetUp
- Create a folder in project called "upgrade-build" and change to it
  - Initialize node project and create package jason and use the -y flag to add all the defaults
  - This is a quick start because it uses all the defaults
```npm init -y```

##### Install Dependencies
- Install webpack at version 3: ```npm install webpack --save-dev```
- The ```-save-dev``` flag saves the dependencies under "devDependencies" in package.json

- Install babel-core and bable-loader
```
  npm install babel-core --save-dev
  npm install babel-loader --save-dev
  ```
###### Install ECMAScripts
- use  preset "env" which includes 2015, 2016, 2017.
- Can use instead of babel-preset-latest or stage-0
```npm install babel-preset-env --save-dev```

- Install ```npm babel-preset-react --save-dev```

- Create a build and start commands to build the bundle and start the webserver



--------------------------------------------------------------------------------------------------

## REVIEW
- What is React.js?
- What is JSX? Why use it?
- What is Babel? Why use it?
- What is the advantage of using webpack-dev-server? Alternative?
- What two packages are used with React? Describe?
- How does webpack improve performance?


- Javascript and XML. An exptension of javascript used to write React components.
- Webpack creates fewer request made by the app because it bundles all the file request into one bundled javescript file which makes fewer requests.


## Eloborate and Apply to other Projects






--------------------------------------------------------------------------------------------------

## REFERENCES
- [Linkedin Learning: React.js Essential Training](https://www.linkedin.com/learning/react-js-essential-training/what-is-react)
- [Github: postcss-loader](https://github.com/postcss/postcss-loader)
- [postcss-loader](https://www.npmjs.com/package/postcss-loader)
- [Using autoprefixer-loader and postcss-loader](https://github.com/postcss/autoprefixer#webpack)
- [Autoprefixer-loader](https://www.npmjs.com/package/autoprefixer-loader)

[Wiki: React Javascript Library](https://en.wikipedia.org/wiki/React_(JavaScript_library)#JSX)














