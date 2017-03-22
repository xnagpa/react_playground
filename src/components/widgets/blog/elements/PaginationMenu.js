import React, { Component } from 'react';
// import { Menu } from 'semantic-ui-react';
// import { bind } from 'lodash';
import { paginationPath } from 'helpers/routes/pagination';
import Link from 'components/elements/Link';

class PaginationMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to={ paginationPath(1) }>Страница 1</Link>
        <Link to={ paginationPath(2) }>Страница 2</Link>
      </div>
    );
  }
}

PaginationMenu.propTypes = {
  handlePaginationClick: React.PropTypes.func
};

export default PaginationMenu;
