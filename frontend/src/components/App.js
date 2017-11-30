import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';
import '../App.css';
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <h1>Home page</h1>
        )} />
        <Route exact path="/category" render={() => (
          <h1>Category route test</h1>
        )} />
      </div>
    );
  }
}

function mapStateToProps ({ posts, comments, categories }) {
  return {
    posts: posts,
    comments: comments,
    categories: categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    //selectRecipe: (data) => dispatch(addRecipe(data)),
    //remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
