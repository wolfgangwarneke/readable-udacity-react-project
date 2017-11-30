import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postsFetchData } from '../actions';
import Post from './Post';

export class Main extends Component {
  componentDidMount() {
    console.log("MAIN PROPS", this.props);
    this.props.postsFetchData()
  }

  render() {
    const posts = this.props.posts
    return (
      <div>
        <h1>MAIN COMPONENT</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      </div>
    )
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
)(Main)
