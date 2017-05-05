import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { map, range, bind } from 'lodash';
import { Button } from 'semantic-ui-react';

class PaginationMenu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = bind(this.handleClick, this);
  }

  handleClick(page) {
    this.props.handlePaginationClick(page);
  }

  render() {
    const perPageCount = 2;
    const pagesCount = Math.ceil(this.props.totalCount / perPageCount);
    return (
        <List horizontal>
          {map(range(1,pagesCount + 1), (entry) => (
              <Button key={entry} onClick={ () => (this.handleClick(entry)) }>Страница {entry}</Button>
          ))}
        </List>
    );
  }
}

PaginationMenu.propTypes = {
  handlePaginationClick: React.PropTypes.func,
  totalCount: React.PropTypes.number
};

export default PaginationMenu;
