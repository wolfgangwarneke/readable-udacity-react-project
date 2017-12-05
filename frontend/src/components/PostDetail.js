import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectDetailPost, getNonStatePostById, getComments, voteTest } from '../actions'
import CommentForm from './CommentForm'
import Comment from './Comment'
import PostEdit from './PostEdit'
import ToolBar from './ToolBar'
import Modal from 'react-modal'
import capitalize from '../utils/capitalize'
import User from 'react-icons/lib/fa/user'
import Spinner from 'react-icons/lib/fa/spinner'
import Plus from 'react-icons/lib/fa/plus-circle'

class PostDetail extends Component {
  state = {
    postLoaded: false,
    editingPost: false
  }

  toggleEditPostModal = () => this.setState(() => ({ editingPost: !this.state.editingPost }))

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

  componentDidUpdate() {
  }

  render() {
    const post = this.props.detailPost || this.state.post
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
              </div>
              <div className="float-right">
                <ToolBar
                  iconSize={25}
                  voteScore={post.voteScore}
                  upVote={() => this.props.voteTest("posts", post.id, "upVote")}
                  downVote={() => this.props.voteTest("posts", post.id, "downVote")}
                  edit={this.toggleEditPostModal}
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
              <button type="button" className="btn btn-sm btn-secondary ml-4" data-toggle="modal" data-target="#exampleModal">
                <Plus size={20} />
              </button>
            </div>
          </div>

          <Modal
            className='modal'
            overlayClassName='overlay'
            isOpen={this.state.editingPost}
            onRequestClose={this.toggleEditPostModal}
            contentLabel='Modal'
          >
            <h1>POST EDIT</h1>
              <PostEdit post={this.props.detailPost} />

          </Modal>

          {/*Bootstrap modal*/}
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header bg-light">
                  <h5 className="modal-title" id="exampleModalLabel">Comment</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <CommentForm post={this.props.detailPost} />
                </div>
              </div>
            </div>
          </div>
          <ul className="list-style-none pl-4">
            {comments && comments.map(c => (
              <li key={c.id}><Comment comment={c} /></li>
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

function mapStateToProps ({ posts, comments, categories }) {
  return {
    posts: posts.posts.reduce((postsObj, current) => {
      postsObj[current.id] = current
      return postsObj
    }, {}),
    detailPost: posts.detailPost,
    comments: comments,
    categories: categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectDetailPost: (post) => dispatch(selectDetailPost(post)),
    getNonStatePostById: (postId) => dispatch(getNonStatePostById(postId)),
    getComments: (postId) => dispatch(getComments(postId)),
    voteTest: (path, id, voteType) => dispatch(voteTest(path, id, voteType))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)
