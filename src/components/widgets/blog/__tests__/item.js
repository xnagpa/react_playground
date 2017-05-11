import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Link from 'components/elements/Link';
import BlogItem from '../BlogItem';
import TextBox from '../elements/TextBox';
import Image from '../elements/Image';
import { Provider } from 'react-redux';

const store = {
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({
    posts: {
      isFetching: false,
      error: false,
      entries: [{
        id: 0,
        meta: {},
        image: {},
        text: 'Finn and Jake`s scrambled eggs',
        likes: 60,
        totalCount: 1,
        editPath: '/posts/1/edit'
      }]
    },
    post: {
      isUpdating: false,
      isFetching: false,
      error:false,
      entry:null
    },
    comments: {
      isUpdating: false,
      isFetching: false,
      error:false,
      entry:null
    },
    like: {
      isFetching: false,
      error: false,
      entries: []
    }
  }),
};


describe('BlogItem', () => {
  it('renders without crashing', () => {
    const div =  document.createElement('div');
    ReactDOM.render(<Provider store={store}><BlogItem/></Provider>, div);
  });
});

describe('render', () => {
  it('renders the title', () => {
    const itemProps = {
      text: "Finn and Jake`s scrambled eggs",
      id: 5,
      image: {
        src: 'http://semantic-ui.com/images/wireframe/short-paragraph.png'
      }
    };
    const item = shallow(<BlogItem {...itemProps}/>);
    const text = <TextBox>{ "Finn and Jake`s scrambled eggs" }</TextBox>;
    const image = <Image
      src='http://semantic-ui.com/images/wireframe/short-paragraph.png'/>;

    expect(item.contains(text)).toEqual(true);
    expect(item.contains(image)).toEqual(true);
  });

  it('renders common item', () => {
    const itemProps = {
      text: "Finn and Jake`s scrambled eggs",
      id: 5,
      image: {
        src: 'http://semantic-ui.com/images/wireframe/short-paragraph.png'
      }

    };
    const item = shallow(<BlogItem {...itemProps}/>);
    expect(item).toMatchSnapshot();
  });
});
