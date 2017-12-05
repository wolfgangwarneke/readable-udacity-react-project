import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postsFetchData, categoriesFetchData } from '../actions';
import Post from './Post';

export class Main extends Component {
  componentDidMount() {
    console.log("MAIN PROPS", this.props);
    this.props.postsFetchData()
    this.props.categoriesFetchData()
  }

  render() {
    const posts = this.props.posts
    return (
      <div>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
      </div>
    )
  }
}

function mapStateToProps ({ posts, comments, categories }) {
  return {
    posts: posts.posts,
    detailPostId: posts.detailPostId,
    comments: comments,
    categories: categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    postsFetchData: () => dispatch(postsFetchData()),
    categoriesFetchData: () => dispatch(categoriesFetchData())
    //remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
