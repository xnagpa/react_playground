import React from 'react';
import TextBox from './TextBox';
import PropTypes from 'prop-types';
import { Label, List } from 'semantic-ui-react';
import Image from './Image';
const MetaData = (props) => {
  const {
    author,
    updatedAt,
    createdAt
  } = props;
  return (
    <div>
      <div>
        {author &&
          <Label as='a'>
            <Image avatar spaced='right'
            src='https://s-media-cache-ak0.pinimg.com/originals/82/81/2a/82812a3e12d1831e97d89d5809895575.png' />
             {`${author.name}, ${author.age} лет`}
          </Label>
        }
      </div>
      <div>
        <List horizontal>
       { updatedAt &&
         <List.Item>
           <List.Content>
              <TextBox>{`Отредактировано ${updatedAt}`}</TextBox>
            </List.Content>
         </List.Item> }
       { createdAt &&
         <List.Item>
           <List.Content>
             <TextBox>{`Создано ${createdAt}`}</TextBox>
           </List.Content>
         </List.Item> }
       </List>
     </div>
   </div>
  );
};

MetaData.defaultProps = {
  author: {
    name: '',
    age: ''
  },
  updatedAt: '',
  createdAt: ''
};

MetaData.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.string
  }),
  updatedAt: PropTypes.string,
  createdAt: PropTypes.string
};

export default MetaData;
