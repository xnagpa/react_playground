import React from 'react';
import Image from './elements/Image';
import TextBox from './elements/TextBox';
// import Like from './elements/Like';
import MetaData from './elements/MetaData';
import Link from 'components/elements/Link';
import { postsPath } from 'helpers/routes';
import { Item } from 'semantic-ui-react';
import LikeContainer from 'containers/LikeContainer';

const BlogItem =  (props) => {
  const {
    editPath,
    meta,
    image,
    text,
    id
  } = props;
  console.log(editPath);
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
  meta: React.PropTypes.shape(MetaData.propTypes),
  text: React.PropTypes.string,
  image: React.PropTypes.shape(Image.propTypes),
  likes: React.PropTypes.number,
  increaseLikesHandler: React.PropTypes.func,
  id: React.PropTypes.number
};

export default BlogItem;
