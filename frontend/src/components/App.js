import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../logo.svg'
import '../App.css'
import { Route, Link, withRouter } from 'react-router-dom'
import Modal from 'react-modal'
import { getAllPosts, getAllCategories } from '../utils/api'
import { postsFetchData, postNewPost, selectDetailPost, sortByComparator, voteTest } from '../actions'
import { sortByNewest, sortByOldest, sortByHighestVoteScore, sortByLowestVoteScore } from '../utils/comparator'
import Main from './Main'
import Category from './Category'
import PostForm from './PostForm'
import PostDetail from './PostDetail'
import uuidv1 from 'uuid'
import uuidv4 from 'uuid'

class App extends Component {
  state = {
    newPostModalOpen: false
  }

  componentDidMount() {
  }

  toggleNewPostModal = () => this.setState(() => ({ newPostModalOpen: !this.state.newPostModalOpen }))

  render() {
    const { newPostModalOpen } = this.state
    const posts = this.props.posts
    return (
      <div className="App">
        <button onClick={this.toggleNewPostModal}>MODAL test toggle</button>
        <button onClick={this.props.sortByNew}>Sort by newest test</button>
        <button onClick={this.props.sortByOld}>Sort by olden test</button>
        <button onClick={this.props.sortByHighScore}>Sort by hi score test</button>
        <button onClick={this.props.sortByLowScore}>Sort by lo score test</button>
        <button onClick={() => this.props.voteTest('posts', '8xf0y6ziyjabvozdd253nd', "upVote")}>Vote</button>
        <Route exact path="/" render={() => (
          <div>
            <h1>Home page</h1>
            <Main />
          </div>
        )} />

        <Route exact path="/:category" render={(r) => (
          <div>
            <h1>Category: {r.match.params.category}</h1>
            <Category category={r.match.params.category} />
          </div>
        )} />

        <Route path="/:category/:post_id" render={(r) => (
          <div>
            <PostDetail postId={r.match.params.post_id} />
          </div>
        )} />

        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={newPostModalOpen}
          onRequestClose={this.closeNewPostModal}
          contentLabel='Modal'
        >
          <div>
            <h1>Hello from New Post <em>MODAL</em>!</h1>
          </div>
          <PostForm categories={this.props.categories} />
        </Modal>
      </div>
    );
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
    postNewPost: () => dispatch(postNewPost()),
    selectDetailPost: (postId) => dispatch(selectDetailPost(postId)),
    sortByNew: comparator => dispatch(sortByComparator(sortByNewest)),
    sortByOld: comparator => dispatch(sortByComparator(sortByOldest)),
    sortByHighScore: comparator => dispatch(sortByComparator(sortByHighestVoteScore)),
    sortByLowScore: comparator => dispatch(sortByComparator(sortByLowestVoteScore)),
    voteTest: (path, id, voteType) => dispatch(voteTest(path, id, voteType))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
