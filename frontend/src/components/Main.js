import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postsFetchData, categoriesFetchData } from '../actions';
import Post from './Post';
import SortBar from './SortBar';

export class Main extends Component {
  componentDidMount() {
    this.props.postsFetchData()
    this.props.categoriesFetchData()
  }

  render() {
    const posts = this.props.posts
    return (
      <div>
        <SortBar />
        <ul className="list-style-none">
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

function mapStateToProps ({ posts }) {
  return {
    posts: posts.posts,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    postsFetchData: () => dispatch(postsFetchData()),
    categoriesFetchData: () => dispatch(categoriesFetchData()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
