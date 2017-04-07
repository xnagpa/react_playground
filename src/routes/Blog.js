import MainLayout from 'components/layouts/MainLayout';

import About from 'components/About';
import { postsPath } from 'helpers/routes/index';
import { aboutPath } from 'helpers/routes/about';
import { paginationPath } from 'helpers/routes/pagination';
import { likePath } from 'helpers/routes/like';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';
import { fetchPage } from 'actions/Pagination';

import PostContainer from 'containers/PostContainer';
import PostsContainer from 'containers/PostsContainer';

const Like = {
  path: likePath(),
  component: PostContainer
};

const LikePosts = {
  path: likePath(),
  component: PostsContainer
};

const Pagination = {
  path: paginationPath(),
  component: PostsContainer,
  prepareData: (store, query, params) => (
    store.dispatch(fetchPage(params.page))
  )
};

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => (
    store.dispatch(fetchPosts())
  )
};

const AboutRoute = {
  path: aboutPath(),
  component: About
};


const PostRoute = {
  component: PostContainer,
  path: postsPath(),
  prepareData: (store, query, params) => (
    store.dispatch(fetchPost(params.id))
  )
};

export default{
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute,
    Pagination,
    Like,
    LikePosts
  ]
};
