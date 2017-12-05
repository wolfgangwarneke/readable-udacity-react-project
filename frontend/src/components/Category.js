import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { categoryPostsFetchData } from '../actions';
import Post from './Post';
import SortBar from './SortBar';

export class Category extends Component {
  state = {
    currentCategory: undefined
  }

  componentDidMount() {
    const category = this.props.category
    this.props.categoryPostsFetchData(category)
    this.setState({currentCategory: category})
  }

  componentWillReceiveProps(newProps) {
    console.log("loop")
    const category = newProps.category
    if (this.state.currentCategory !== category) {
      this.props.categoryPostsFetchData(category)
      this.setState({currentCategory: category})
    }
  }

  render() {
    const posts = this.props.posts
    if (posts.length > 0) {
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
    } else {
      return (
        <div className="alert alert-warning" role="alert">
          No posts found for this category.  Would you like to <a href="" className="alert-link bounce" data-toggle="modal" data-target="#addPostModal">add one</a>?
        </div>
      )
    }
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
