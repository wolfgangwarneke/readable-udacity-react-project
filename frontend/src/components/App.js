import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../logo.svg'
import '../App.css'
import { Route, Link, withRouter } from 'react-router-dom'
import Modal from 'react-modal'
import { getAllPosts, getAllCategories } from '../utils/api'
import { postsFetchData, postNewPost, selectDetailPost } from '../actions'
import Main from './Main'
import Category from './Category'
import PostForm from './PostForm'
import PostDetail from './PostDetail'

class App extends Component {
  state = {
    newPostModalOpen: false
  }

  componentDidMount() {
    //this.props.selectDetailPost("8xf0y6ziyjabvozdd253nd");
    //console.log("after selecting detail post..."), this.props.detailPostId;
    //getAllCategories()
    //        .then(data => console.log(data))
    // getAllPosts()
    //       .then(
    //         posts => this.props.handleFetchedPosts(posts)
    //       )
    //this.props.postsFetchData()
  }

  toggleNewPostModal = () => this.setState(() => ({ newPostModalOpen: !this.state.newPostModalOpen }))

  render() {
    const { newPostModalOpen } = this.state
    //console.log(this.props);
    // getAllPosts()
    //       .then(
    //         posts => this.props.handleFetchedPosts(posts)
    //       )
    const posts = this.props.posts
    if (posts) console.log("POSTS", posts)
    return (
      <div className="App">
        <button onClick={this.toggleNewPostModal}>MODAL test toggle</button>
        <button onClick={this.props.postNewPost}>New Post test toggle</button>
        <Route exact path="/" render={() => (
          <div>
            <h1>Home page</h1>
            <Link to="/react/8xf0y6ziyjabvozdd253nd">TEST DETAILS LINK</Link>

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
    selectDetailPost: (postId) => dispatch(selectDetailPost(postId))
    //remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
