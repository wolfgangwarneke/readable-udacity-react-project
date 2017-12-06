# _Readable_

#### _A posts/comments project for Udacity's React Nanodegree, 10.6.2017_

#### By _**Wolfgang Warneke**_

## About this Readable project

This is my submission for the React Redux course project. The app interacts with a prebuilt API which provides some default posts and comments as well as allowing for the app to create, read, edit, and delete new posts. A user may create a new post with a category, comment on a post, upvote or downvote a post or comment, edit a post or comment, or delete a post or comment.

## Getting Started

If you would like to check out this project for grading purposes or otherwise...
* Clone project
* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`
* Install and start the Readable frontend App
    - `npm install`
    - `npm start`
* The development server should automatically open localhost:3030/

### Known Issues/Misgivings

Consider this a TODO list for continual improvement as I become more familiar with React/Redux.
* State design.
    - Refactor `misc` reducer into the comments reducer. This was a lazy refactor to avoid changing the comments reducer state from a singular array.
    - Consider using objects with keys rather than array. Arrays made sorting more straightforward, but also made it more necessary to duplicate data for the `detailPost` and `editPost` portions of the posts state.
    - Don't use blank objects for unused `mapStateToProps` functions.
    - Avoid breaking controlled to uncontrolled or uncontrolled to controlled form inputs during any inputs lifecycle. It would be beneficial for me to learn more on this topic.

```
- NPM
```
If NPM is not installed, please check out this [get NPM](https://www.npmjs.com/get-npm) page and follow their instructions.

### Features

*

## Built With

* [React](https://github.com/facebook/react) - JavaScript UI framework
* [Redux](https://github.com/reactjs/redux) - Predictable state management
* [Redux Thunk](https://github.com/gaearon/redux-thunk) - Async middleware for Redux
* [Create React App](https://github.com/facebookincubator/create-react-app) - Tool to bootstrap a simple React boilerplate
* [React Router](https://github.com/ReactTraining/react-router) - URL rooting package for React
* [React Icons](https://github.com/gorangajic/react-icons) - For use of Font Awesome icons
* [Bootstrap](https://getbootstrap.com) - For front end goodness

## License

MIT License

Copyright (c) [2017] [Wolfgang Warneke]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgments
Thank you...
* [Udacity](https://www.udacity.com/)
* [React Training](https://www.reacttraining.com/)
