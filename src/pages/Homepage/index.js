// src/pages/Homepage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsState } from "../../store/feed/selectors";
import { fetchPosts } from "../../store/feed/actions";
import { Link } from "react-router-dom";

export default function Homepage() {
  const dispatch = useDispatch();
  const postState = useSelector(getPostsState); // { posts, loading }

  useEffect(() => {
    // we dispatch the thunk
    dispatch(fetchPosts);
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {postState.loading
          ? "Loading"
          : postState.posts.map((post) => (
              <li key={post.id}>
                <Link to={`/post/${post.id}`}>
                  <h3>{post.title}</h3>
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
}
