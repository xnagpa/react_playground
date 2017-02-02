import React from 'react';
import _ from 'lodash';
//import { entries as blogEntries } from '../constants/static/entries';
import ListPresenter from './widgets/blog/ListPresenter';
import PaginationMenu from './widgets/blog/elements/PaginationMenu';
import request from 'superagent';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogEntries: []
    };
    this.increaseLikesHandler = _.bind(this.increaseLikesHandler, this);
    this.handlePaginationClick = _.bind(this.handlePaginationClick, this);
  }

  fetchPosts(page) {
    if(page == undefined){
      request.get(
        'http://localhost:3001/posts/pages/1',
        {},
        (err, res) => this.setState ({ blogEntries: res.body })
      );
    }
    else {
      request.get(
        `http://localhost:3001/posts/pages/${page}`,
        {},
        (err, res) => this.setState ({ blogEntries: res.body })
      );
    }
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

  handlePaginationClick(page) {
    this.fetchPosts(page);
  }


  render() {
    return <div>
      <ListPresenter blogEntries={ this.state.blogEntries }
                     likeTitles={ this.likeTitles(this.state.blogEntries)}
                     increaseLikesHandler={ this.increaseLikesHandler }
      />
      <PaginationMenu handlePaginationClick={ this.handlePaginationClick }/>
    </div>;
  }
}

export default BlogList;
