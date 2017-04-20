import MainLayout from 'components/layouts/MainLayout';

import About from 'components/views/About';
import ContactUs from 'components/views/ContactUs';
import Edit from 'components/views/EditPost';
import { postsPath } from 'helpers/routes/index';
import { editPath } from 'helpers/routes/edit';
import { aboutPath } from 'helpers/routes/about';
import { contactPath } from 'helpers/routes/contact';
import initialLoad from 'helpers/initialLoad';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

import PostContainer from 'containers/PostContainer';
import PostsContainer from 'containers/PostsContainer';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store, query) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts(query['page'] || 1));
  }
};

const AboutRoute = {
  path: aboutPath(),
  component: About
};

const EditPostRoute = {
  path: editPath(),
  component: Edit,
  prepareData: (store, query, params) => {
    return  store.dispatch(fetchPost(params.id));
  }
};

const ContactRoute = {
  path: contactPath(),
  component: ContactUs
};


const PostRoute = {
  component: PostContainer,
  path: postsPath(),
  prepareData: (store, query, params) => {
    return  store.dispatch(fetchPost(params.id));
  }
};

export default{
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute,
    ContactRoute,
    EditPostRoute
  ]
};
