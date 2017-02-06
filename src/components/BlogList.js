import React from 'react';
import {clone, findIndex, map, bind} from 'lodash';
import ListPresenter from './widgets/blog/ListPresenter';
import PaginationMenu from './widgets/blog/elements/PaginationMenu';
import request from 'superagent';
import  { host } from 'constants/static/api';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogEntries: this.fetchPosts()
    };
    this.increaseLikesHandler = bind(this.increaseLikesHandler, this);
    this.handlePaginationClick = bind(this.handlePaginationClick, this);
    this.fetchPosts = bind(this.fetchPosts, this);
    this.likeTitles = bind(this.likeTitles, this);
  }

  fetchPosts(page = 1) {
    request.get(
      `${host}/posts/pages/${page}`,
      {},
      (err, res) => this.setState ({ blogEntries: res.body })
    );
  }

  setLikes(id) {
    const blogEntries = clone(this.state.blogEntries);
    const index = findIndex(blogEntries, function(o) { return o.id == id; });
    blogEntries[index].likes += 1;
    this.setState({ blogEntries });
  }

  likeTitles(entries) {
    return (map(entries, (entry) => (
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
