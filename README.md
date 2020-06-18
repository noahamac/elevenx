# ElevenX Visualization

### Installation 
Navigate to: `https://{YourLookerInstance}/marketplace/installed`

<img src="https://github.com/noahamac/viz-inspector/blob/master/install.png">

Point to this Repo:
> Git Repository URL: `git://github.com/noahamac/elevenx/`

> Git Commit SHA: `58b20e19ce630f4ec200c829dcdfffdb4a7539ec`

### Usage

Manipulate the gauge value in the Visualization config pane or by adding a measure-like value between 0 and 1. If you set the gauge value to 11, and move your cursor, **Gauge Intensifies**

<img src="https://github.com/noahamac/elevenx/blob/master/at_eleven.gif" width="33%">

The image below shows an example query that would allow this viz to work as an actual gauge viz. The measure is hidden, and a table calc transforms the measure to a decimal value between 0 and 1. At 1, or 100%, the 11x gauge will be maxed out. The viz looks for a dimension-like and measure-like field for this functionality, so it could be a number measure or a table calc which resolves to measure-like. 

<img src="https://github.com/noahamac/elevenx/blob/master/Screen%20Shot%202020-06-18%20at%2010.56.23%20AM.png" width="33%">


### What if I find an error? Suggestions for improvements?
Raise an issue or start a PR :smile: 


### Interested in extending the visualization for your own use case?
#### Quickstart Dev Instructions
1.  **Install Dependecies.**

    Using yarn, install all dependencies
    ```
    yarn
    ```
2. **Make changes to the source code**

3.  **Compile your code**

    You need to compile your react code, let's run:
    ```
    yarn build
    ```
    Recommended: Webpack can detect changes and build automatically
     ```
    yarn watch
    ```
    Your compiled code can be found in this repo.

**`elevenup.js`**: This visualization's minified distribution file. 

**`LICENSE`**: Looker's Marketplace content License file.

**`manifest.lkml`**: Looker's external dependencies configuration file. The visualization object is defined here.

**`marketplace.json`**: A JSON file containing information the marketplace installer uses to set up this project.

**`/src`**: This directory will contain all of the visualization's source code.

**`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.

**`README.md`**: This! A text file containing useful reference information about this visualization.

**`yarn.lock`**: [Yarn](https://yarnpkg.com/) is a package manager alternative to npm. This file serves essentially the same purpose as `package-lock.json`, just for a different package management system.

**`.babelrc`**: A configuration file for the Babel jsx -> js compiler.
