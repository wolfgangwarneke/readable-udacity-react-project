import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postsFetchData, categoriesFetchData, selectDetailPost } from '../actions';
import Post from './Post';
import PostEdit from './PostEdit';

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
        <ul className="list-style-none">
            {posts.map(post => (
              <li key={post.id}>
                <Post post={post} />
              </li>
            ))}
        </ul>

        {/*Bootstrap PostEdit modal*/}
        <div className="modal fade" id="editPostModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-light">
                <h5 className="modal-title" id="exampleModalLabel">Edit Post</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <PostEdit post={this.props.detailPost} />
              </div>
            </div>
          </div>
        </div>

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
    selectDetailPost: (post) => dispatch(selectDetailPost(post))
    //remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
