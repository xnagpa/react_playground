import React from 'react';
import Image from './elements/Image';
import TextBox from './elements/TextBox';
// import Like from './elements/Like';
import MetaData from './elements/MetaData';
import Link from 'components/elements/Link';
import { postsPath } from 'helpers/routes';
import { Item } from 'semantic-ui-react';
import LikeContainer from 'containers/LikeContainer';
import PropTypes from 'prop-types';

const BlogItem =  (props) => {
  const {
    editPath,
    meta,
    image,
    text,
    id
  } = props;

  return <Item>
    { image && <Item.Image size='medium' src={ image.src } />}
    <Item.Content>
      <Item.Header>
        <Link to={ postsPath(id) }>{ text }</Link>
      </Item.Header>
      <Item.Description>
        <Image
          src='http://semantic-ui.com/images/wireframe/short-paragraph.png'/>
        <TextBox>{ text }</TextBox>
      </Item.Description>
      <Item.Meta>
        { meta && <MetaData author={meta.author}
        updatedAt= { meta.updatedAt }
        createdAt= {meta.createdAt}/> }
      </Item.Meta>
      <Item.Extra>
        <LikeContainer id={ id }/>
      </Item.Extra>
      <Item.Extra>
        <Link to={ editPath }>Edit this post</Link>
      </Item.Extra>
    </Item.Content>
  </Item>;
};

BlogItem.defaultProps = {
  text: '',
  likes: 0,
  id: 0
};

BlogItem.propTypes = {
  meta: PropTypes.shape(MetaData.propTypes),
  text: PropTypes.string,
  image: PropTypes.shape(Image.propTypes),
  likes: PropTypes.number,
  increaseLikesHandler: PropTypes.func,
  id: PropTypes.number
};

export default BlogItem;
