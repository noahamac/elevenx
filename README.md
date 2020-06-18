# ElevenX Visualization

### Installation 
Navigate to: `https://{YourLookerInstance}/marketplace/installed`

<img src="https://github.com/noahamac/viz-inspector/blob/master/install.png">

Point to this Repo:
> Git Repository URL: `git://github.com/noahamac/elevenx/`

> Git Commit SHA: `3063fcad6345786733a8a487dc6e521e4f70d866`

### Usage

Manipulate the gauge value in the Visualization config pane. If you set the gauge value to 11, and move your cursor, **Gauge Intensifies**

<img src="https://github.com/noahamac/elevenx/blob/master/at_eleven.gif" width="33%">

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
