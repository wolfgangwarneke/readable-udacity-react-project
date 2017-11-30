import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';
import '../App.css';
import { Route } from 'react-router-dom'
import { getAllPosts } from '../utils/api';
import { postsFetchData } from '../actions';


class App extends Component {
  componentDidMount() {
    // getAllPosts()
    //       .then(
    //         posts => this.props.handleFetchedPosts(posts)
    //       )
    this.props.postsFetchData()
  }

  render() {
    //console.log(this.props);
    // getAllPosts()
    //       .then(
    //         posts => this.props.handleFetchedPosts(posts)
    //       )
    const posts = this.props.posts
    if (posts) console.log("POSTS", posts)
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <div>
            <h1>Home page</h1>
            {posts.map(post => (
              <div key={post.id}>
              <h2>{post.title}</h2>
              <h3>{post.timestamp}</h3>
              <p>{post.body}</p>
              </div>
            ))}
          </div>
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
    postsFetchData: () => dispatch(postsFetchData()),
    //remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
