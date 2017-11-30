import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';
import '../App.css';
import { Route } from 'react-router-dom'
import Modal from 'react-modal'
import { getAllPosts } from '../utils/api';
import { postsFetchData } from '../actions';
import Main from './Main';
import Category from './Category';

class App extends Component {
  state = {
    newPostModalOpen: false
  }

  componentDidMount() {
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
        <Route exact path="/" render={() => (
          <div>
            <h1>Home page</h1>
            <Main />
          </div>
        )} />

        <Route path="/:category" render={(r) => (
          <div>
            <h1>Category: {r.match.params.category}</h1>
            <Category category={r.match.params.category} />
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
        </Modal>
      </div>
    );
  }
}

function mapStateToProps ({ posts, comments, categories }) {
  return {
    posts: posts,
    comments: comments,
    categories: categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    postsFetchData: () => dispatch(postsFetchData()),
    //remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
