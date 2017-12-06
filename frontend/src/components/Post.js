import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost, selectDetailPost, selectEditPost, voteTest } from '../actions'
import ToolBar from './ToolBar'
import timeFormat from '../utils/timeFormat'

class Post extends Component {
  render() {
    const post = this.props.post
    const link = `/${post.category}/${post.id}`
    return (
      <div className="post-card card text-left">
        <div className="card-body">
          <Link onClick={() => this.props.selectDetailPost(post)} to={link}>
            <h5 className="card-title post-title-link">{post.title}</h5>
          </Link>
          <div className="card-subtitle">
            <h6 className="card-subtitle mb-2 text-muted d-inline">
              by {post.author}
            </h6>
            <Link to={"/" + post.category}>
              <span className="badge badge-secondary ml-2">{post.category}</span>
            </Link>
            <span className="timestamp mr-1 float-right font-weight-light font-italic">{timeFormat(post.timestamp)}</span>
          </div>
          <p className="card-text">{post.body} <Link onClick={() => this.props.selectDetailPost(post)} to={link}>...more</Link></p>
          <ToolBar
            commentCount={post.commentCount}
            voteScore={post.voteScore}
            upVote={() => this.props.voteTest("posts", post.id, "upVote")}
            downVote={() => this.props.voteTest("posts", post.id, "downVote")}
            edit={() => this.props.selectEditPost(post)}
            editModalTarget={"#editPostModal"}
            remove={() => this.props.deletePost(post.id)}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps ({}) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (postId) => dispatch(deletePost(postId)),
    selectDetailPost: (post) => dispatch(selectDetailPost(post)),
    selectEditPost: (post) => dispatch(selectEditPost(post)),
    voteTest: (path, id, voteType) => dispatch(voteTest(path, id, voteType))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
