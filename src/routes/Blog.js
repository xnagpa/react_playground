import MainLayout from 'components/layouts/MainLayout';

import BlogList from 'components/BlogList';
import Post from 'components/Post';
import About from 'components/About';
import { postsPath } from 'helpers/routes/index';
import { aboutPath } from 'helpers/routes/about';

const Index = {
  path: '/',
  component: BlogList
};

const AboutRoute = {
  path: aboutPath(),
  component: About
};


const PostRoute = {
  component: Post,
  path: postsPath()
};

export default{
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute
  ]
};
