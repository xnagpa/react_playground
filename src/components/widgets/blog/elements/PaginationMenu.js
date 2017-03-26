import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { map, range } from 'lodash';
import { paginationPath } from 'helpers/routes/pagination';
import Link from 'components/elements/Link';

class PaginationMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const perPageCount = 2;
    const pagesCount = Math.ceil(this.props.totalCount / perPageCount);
    return (
        <List horizontal>
        {map(range(1,pagesCount + 1), (entry) => (
          <List.Item as='a'>
          <Link to={ paginationPath(entry) }>Страница {entry}</Link>
          </List.Item>
        ))}
        </List>
    );
  }
}

PaginationMenu.propTypes = {
  handlePaginationClick: React.PropTypes.func,
  totalCount: React.PropTypes.num
};

export default PaginationMenu;
