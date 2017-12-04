import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { categoryPostsFetchData } from '../actions';
import Post from './Post';

export class Category extends Component {
  componentDidMount() {
    const category = this.props.category
    this.props.categoryPostsFetchData(category)
  }

  componentWillReceiveProps(newProps) {
    const category = newProps.category
    this.props.categoryPostsFetchData(category)
  }

  render() {
    const posts = this.props.posts
    return (
      <div>
        <h1>CATEGORY COMPONENT</h1>
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
    posts: posts.posts,
    comments: comments,
    categories: categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    categoryPostsFetchData: (category) => dispatch(categoryPostsFetchData(category)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category)
