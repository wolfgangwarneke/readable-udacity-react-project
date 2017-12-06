import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { Route, withRouter } from 'react-router-dom'
import { postsFetchData, postNewPost, selectDetailPost, sortByComparator, voteTest } from '../actions'
import { sortByNewest, sortByOldest, sortByHighestVoteScore, sortByLowestVoteScore } from '../utils/comparator'
import Main from './Main'
import Category from './Category'
import PostForm from './PostForm'
import PostDetail from './PostDetail'
import PostEdit from './PostEdit'
import GeneralNavBar from './GeneralNavBar'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <GeneralNavBar />

        <Route exact path="/" render={() => (
          <div>
            <Main />
          </div>
        )} />

        <Route exact path="/:category" render={(r) => (
          <div>
            <Category category={r.match.params.category} />
          </div>
        )} />

        <Route path="/:category/:post_id" render={(r) => (
          <div>
            <PostDetail postId={r.match.params.post_id} />
          </div>
        )} />

        {/*Bootstrap Add Post modal*/}
        <div className="modal fade" id="addPostModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-light">
                <h5 className="modal-title" id="exampleModalLabel">New Post</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <PostForm categories={this.props.categories} />
              </div>
            </div>
          </div>
        </div>

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
                <PostEdit post={this.props.editPost} />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps ({ posts, categories }) {
  return {
    editPost: posts.editPost, //
    categories: categories //
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
