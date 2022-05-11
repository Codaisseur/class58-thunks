import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPostById } from "../../store/feed/actions";

const PostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostById(id));
  }, []);

  return (
    <div>
      <h1>Post page</h1>
    </div>
  );
};

export default PostPage;
