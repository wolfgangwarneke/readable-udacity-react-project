import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost, selectDetailPost, voteTest } from '../actions'
import capitalize from '../utils/capitalize'

class Post extends Component {
  componentDidMount() {
  }

  render() {
    const post = this.props.post
    const link = `/${post.category}/${post.id}`
    return (
      <div>
        <button onClick={() => this.props.voteTest("posts", post.id, "upVote")}>Upvote</button>
        <button onClick={() => this.props.voteTest("posts", post.id, "downVote")}>Downvote</button>
        <table>
          <tbody>
            <tr>
              <th>Category</th>
              <td><Link to={"/"+post.category}>{capitalize(post.category)}</Link></td>
            </tr>
            <tr>
              <th>Title</th>
              <td><Link onClick={() => this.props.selectDetailPost(post)} to={link}>{post.title}</Link></td>
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
        <button onClick={() => this.props.deletePost(post.id)}>Delete this post.</button>
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
