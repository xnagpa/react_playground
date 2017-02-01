import React from 'react';
import _ from 'lodash';
//import { entries as blogEntries } from '../constants/static/entries';
import ListPresenter from './widgets/blog/ListPresenter';
import request from 'superagent';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogEntries: []
    };
    this.increaseLikesHandler = _.bind(this.increaseLikesHandler, this);
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001/',
      {},
      (err, res) => this.setState ({ blogEntries: res.body })
    );
  }

  componentDidMount() {
    this.fetchPosts();
  }

  setLikes(id) {
    const blogEntries = _.clone(this.state.blogEntries);
    const index = _.findIndex(blogEntries, function(o) { return o.id == id; });
    blogEntries[index].likes += 1;
    this.setState({ blogEntries });
  }

  likeTitles(entries) {
    return (_.map(entries, (entry) => (
      [entry.text, entry.likes]
    )));
  }

  increaseLikesHandler(id) {
    this.setLikes(id);
  }


  render() {
    return React.createElement(ListPresenter, {
      blogEntries: this.state.blogEntries,
      likeTitles: this.likeTitles(this.state.blogEntries),
      increaseLikesHandler: this.increaseLikesHandler
    });
  }
}

export default BlogList;
