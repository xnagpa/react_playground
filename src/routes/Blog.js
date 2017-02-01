import MainLayout from 'components/layouts/MainLayout';

import BlogList from 'components/BlogList';
import Post from 'components/Post';
import { postsPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: BlogList
};

const PostRoute = {
  component: Post,
  path: postsPath()
};

export default{
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute
  ]
};
