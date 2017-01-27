import MainLayout from 'components/layouts/MainLayout';

import BlogList from 'components/BlogList';
import Post from 'components/Post';

const Index = {
  path: '/',
  component: BlogList
};

const PostRoute = {
  component: Post,
  path: '/posts/:id'
};

export default{
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute
  ]
};
