import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost, selectDetailPost, voteTest, categoriesFetchData } from '../actions'
import capitalize from '../utils/capitalize'
import Plus from 'react-icons/lib/fa/plus'

class GeneralNavBar extends Component {
  componentDidMount() {
    this.props.categoriesFetchData()
  }

  render() {
    const categories = this.props.categories
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">Readable</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className={"nav-item" + (window.location.pathname.length === 1 ? " active" : "")}>
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            {categories.map(cat => (
              <li key={cat} className="nav-item">
                <Link className="nav-link" to={"/" + cat}>{capitalize(cat)}</Link>
              </li>
            ))}
          </ul>
          <span className="navbar-text main-add-btn" data-toggle="modal" data-target="#addPostModal">
            <Plus size={30} />
          </span>
        </div>
      </nav>
    )
  }
}

function mapStateToProps ({ categories }) {
  return {
    categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (postId) => dispatch(deletePost(postId)),
    selectDetailPost: (post) => dispatch(selectDetailPost(post)),
    voteTest: (path, id, voteType) => dispatch(voteTest(path, id, voteType)),
    categoriesFetchData: () => dispatch(categoriesFetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralNavBar)
