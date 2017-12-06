import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { sortByComparator } from '../actions';
import { sortByNewest, sortByOldest, sortByHighestVoteScore, sortByLowestVoteScore } from '../utils/comparator'

export class SortBar extends Component {
  render() {
    const posts = this.props.posts
    return (
      <div className="btn-grp bg-light mb-2">
        <button className="btn btn-light" onClick={this.props.sortByNew}>Newest</button>
        <button className="btn btn-light" onClick={this.props.sortByOld}>Oldest</button>
        <button className="btn btn-light" onClick={this.props.sortByHighScore}>Highest Score</button>
        <button className="btn btn-light" onClick={this.props.sortByLowScore}>Lowest Score</button>
      </div>
    )
  }
}

function mapStateToProps ({}) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    sortByNew: comparator => dispatch(sortByComparator(sortByNewest)),
    sortByOld: comparator => dispatch(sortByComparator(sortByOldest)),
    sortByHighScore: comparator => dispatch(sortByComparator(sortByHighestVoteScore)),
    sortByLowScore: comparator => dispatch(sortByComparator(sortByLowestVoteScore))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortBar)
