import MainLayout from 'components/layouts/MainLayout';

import initialLoad from 'helpers/initialLoad';
import { postsPath } from 'helpers/routes/index';
import { aboutPath } from 'helpers/routes/about';
import { paginationPath } from 'helpers/routes/pagination';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';
import { fetchPage } from 'actions/Pagination';

import About from 'components/views/About';
import PostContainer from 'containers/PostContainer';
import PostsContainer from 'containers/PostsContainer';

const Pagination = {
  path: paginationPath(),
  component: PostsContainer,
  prepareData: (store, query, params) => {
    return store.dispatch(fetchPage(params.page));
  }
};

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts());
  }
};

const AboutRoute = {
  path: aboutPath(),
  component: About
};


const PostRoute = {
  component: PostContainer,
  path: postsPath(),
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPost(params.id));
  }
};

export default{
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute,
    Pagination
  ]
};
