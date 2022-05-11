export const getPostsState = (reduxState) => {
  const posts = reduxState.feed.posts;
  const loading = reduxState.feed.loading;

  return { posts, loading };
};
