import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost, selectDetailPost, voteTest } from '../actions'
import ToolBar from './ToolBar'
import capitalize from '../utils/capitalize'
import ThumbsUp from 'react-icons/lib/fa/thumbs-o-up'
import ThumbsDown from 'react-icons/lib/fa/thumbs-o-down'
import Trash from 'react-icons/lib/fa/trash-o'
import Pencil from 'react-icons/lib/fa/pencil'
import CommentIcon from 'react-icons/lib/fa/comment-o'

class Post extends Component {
  componentDidMount() {
  }

  render() {
    const post = this.props.post
    const link = `/${post.category}/${post.id}`
    return (
      <div className="card text-left" style={{width: "26rem"}}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            by {post.author}
            <Link to={"/" + post.category}>
              <span className="badge badge-secondary ml-2">{post.category}</span>
            </Link>
          </h6>
          <p className="card-text">{post.body} <Link onClick={() => this.props.selectDetailPost(post)} to={link}>...more</Link></p>
          <ToolBar
            commentCount={post.commentCount}
            voteScore={post.voteScore}
            upVote={() => this.props.voteTest("posts", post.id, "upVote")}
            downVote={() => this.props.voteTest("posts", post.id, "downVote")}
            edit={() => alert('please replace with editing')}
            remove={() => this.props.deletePost(post.id)}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ }) {
  return {
    //detailPost
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (postId) => dispatch(deletePost(postId)),
    selectDetailPost: (post) => dispatch(selectDetailPost(post)),
    voteTest: (path, id, voteType) => dispatch(voteTest(path, id, voteType))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
