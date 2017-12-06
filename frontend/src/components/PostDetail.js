import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectDetailPost, getNonStatePostById, getComments, voteTest, setEditComment, selectEditPost } from '../actions'
import CommentForm from './CommentForm'
import CommentEdit from './CommentEdit'
import Comment from './Comment'
import PostEdit from './PostEdit'
import ToolBar from './ToolBar'
import capitalize from '../utils/capitalize'
import User from 'react-icons/lib/fa/user'
import Spinner from 'react-icons/lib/fa/spinner'
import Plus from 'react-icons/lib/fa/plus-circle'
import timeFormat from '../utils/timeFormat'

class PostDetail extends Component {
  state = {
    postLoaded: false,
  }

  componentDidMount() {
    const postId = this.props.postId
    if (!postId) return
    if (this.props.detailPost && postId !== this.props.detailPost.id) this.props.selectDetailPost(postId)

    let post = this.props.posts[postId]
    if (post) {
      this.props.selectDetailPost(post)
    } else {
        this.props.getNonStatePostById(postId)
    }

    this.props.getComments(postId)
  }

  render() {

    const post = this.props.posts[this.props.postId]
    console.log(post)
    const editPost = this.props.editPost
    const comments = this.props.comments
    if (post) {
      return (
        <div>
          <div className="card">
            <div className="card-header">
              <div className="float-left">
                <User className="d-none d-sm-inline" size={20} />
                <span className="badge">{post.author}</span>
                <Link to={"/" + post.category}>
                  <span className="badge badge-secondary">{capitalize(post.category)}</span>
                </Link>
                <span className="timestamp ml-4 float-right font-weight-light font-italic">{timeFormat(post.timestamp)}</span>
              </div>
              <div className="float-right">
                <ToolBar
                  iconSize={25}
                  voteScore={post.voteScore}
                  upVote={() => this.props.voteTest("posts", post.id, "upVote")}
                  downVote={() => this.props.voteTest("posts", post.id, "downVote")}
                  edit={() => this.props.selectEditPost(post)}
                  editModalTarget={"#editPostModal"}
                  remove={() => alert('You will be deleted!')}
                />
              </div>
            </div>
            <div className="card-body text-left">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text ml-2">{post.body}</p>
            </div>
            <div className="card-footer text-right">
              <span className="text-muted">
                Comments:
                <span className="font-weight-bold lead ml-2">{post.commentCount}</span>
              </span>
              <button type="button" className="btn btn-sm btn-secondary ml-4" data-toggle="modal" data-target="#addCommentModal">
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/*Bootstrap Add Comment modal*/}
          <div className="modal fade" id="addCommentModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header bg-light">
                  <h5 className="modal-title" id="exampleModalLabel">Comment</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <CommentForm parentPostId={post.id} />
                </div>
              </div>
            </div>
          </div>

          {/*Bootstrap Edit Comment modal*/}
          <div className="modal fade" id="editCommentModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header bg-light">
                  <h5 className="modal-title" id="exampleModalLabel">Edit Comment</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <CommentEdit comment={this.state.currentEditComment} />
                </div>
              </div>
            </div>
          </div>

          <ul className="list-style-none pl-4">
            {comments && comments.map(c => (
              <li key={c.id}><Comment setCurrentEditComment={() => this.props.setEditComment(c)} comment={c} /></li>
            ))}
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <Spinner className="App-logo" size={50} />
        </div>
      )
    }
  }
}

function mapStateToProps ({ posts, comments, categories, misc }) {
  return {
    posts: posts.posts.reduce((postsObj, current) => {
      postsObj[current.id] = current
      return postsObj
    }, {}),
    detailPost: posts.detailPost,
    editPost: posts.editPost,
    comments: comments,
    categories: categories,
    misc: misc
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectDetailPost: (post) => dispatch(selectDetailPost(post)),
    selectEditPost: (post) => dispatch(selectEditPost(post)),
    getNonStatePostById: (postId) => dispatch(getNonStatePostById(postId)),
    getComments: (postId) => dispatch(getComments(postId)),
    voteTest: (path, id, voteType) => dispatch(voteTest(path, id, voteType)),
    setEditComment: (comment) => dispatch(setEditComment(comment))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)
