import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectDetailPost, getNonStatePostById, getComments, voteTest } from '../actions'
import CommentForm from './CommentForm'
import Comment from './Comment'
import PostEdit from './PostEdit'
import Modal from 'react-modal'
import capitalize from '../utils/capitalize'

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
          <button onClick={() => this.props.voteTest("posts", post.id, "upVote")}>Upvote</button>
          <button onClick={() => this.props.voteTest("posts", post.id, "downVote")}>Downvote</button>
          <button onClick={this.toggleEditPostModal}>Edit post</button>
          <table>
            <tbody>
              <tr>
                <th>Category</th>
                <td><Link to={"/"+post.category}>{capitalize(post.category)}</Link></td>
              </tr>
              <tr>
                <th>Title</th>
                <td>{post.title}</td>
              </tr>
              <tr>
                <th>Author</th>
                <td>{post.author}</td>
              </tr>
              <tr>
                <th>Body</th>
                <td>{post.body}</td>
              </tr>
              <tr>
                <th>Comment Count</th>
                <td>{post.commentCount}</td>
              </tr>
              <tr>
                <th>Vote score</th>
                <td>{post.voteScore}</td>
              </tr>
            </tbody>
          </table>
          <Modal
            className='modal'
            overlayClassName='overlay'
            isOpen={this.state.editingPost}
            onRequestClose={this.toggleEditPostModal}
            contentLabel='Modal'
          >
            <PostEdit post={this.props.detailPost} />
          </Modal>
          <CommentForm post={this.props.detailPost} />
          <ul>
            {comments && comments.map(c => (
              <li key={c.id}><Comment comment={c} /></li>
            ))}
          </ul>
        </div>
      )
    } else {
      return (
        <h1>No post found or post is loading</h1>
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
