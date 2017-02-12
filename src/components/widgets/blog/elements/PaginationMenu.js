import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { bind } from 'lodash';

class PaginationMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
    this.handleItemClick = bind(this.handleItemClick, this);
  }

  handleItemClick(e, { name }) {
    this.props.handlePaginationClick(name);
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu pagination>
        <Menu.Item name='1' active={activeItem === '1'}
          onClick={this.handleItemClick} />
        <Menu.Item name='2' active={activeItem === '2'}
          onClick={this.handleItemClick} />
        <Menu.Item name='3' active={activeItem === '3'}
          onClick={this.handleItemClick} />
      </Menu>
    );
  }
}

PaginationMenu.propTypes = {
  handlePaginationClick: React.PropTypes.func
};

export default PaginationMenu;
