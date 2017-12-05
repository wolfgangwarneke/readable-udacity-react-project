import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postsFetchData, categoriesFetchData, selectDetailPost, sortByComparator } from '../actions';
import Post from './Post';
import PostEdit from './PostEdit';
import SortBar from './SortBar';
import { sortByNewest, sortByOldest, sortByHighestVoteScore, sortByLowestVoteScore } from '../utils/comparator'

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

function mapStateToProps ({ posts, comments, categories }) {
  return {
    posts: posts.posts,
    detailPost: posts.detailPost,
    comments: comments,
    categories: categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    postsFetchData: () => dispatch(postsFetchData()),
    categoriesFetchData: () => dispatch(categoriesFetchData()),
    selectDetailPost: (post) => dispatch(selectDetailPost(post)),
    //remove: (data) => dispatch(removeFromCalendar(data))
    sortByNew: comparator => dispatch(sortByComparator(sortByNewest)),
    sortByOld: comparator => dispatch(sortByComparator(sortByOldest)),
    sortByHighScore: comparator => dispatch(sortByComparator(sortByHighestVoteScore)),
    sortByLowScore: comparator => dispatch(sortByComparator(sortByLowestVoteScore))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
