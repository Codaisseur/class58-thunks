import { startLoading, postsFetched, detailsFetched } from "./slice";
import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export async function fetchPosts(dispatch, getState) {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${API_URL}/posts`);

    const posts = response.data.rows;
    dispatch(postsFetched(posts));
  } catch (e) {
    // setDoneLoading
    // setError
    console.log(e.message);
  }
}

export const fetchPostById = (id) => async (dispatch, getState) => {
  try {
    console.log("the id in the thunk!", id);
    dispatch(startLoading());

    const response = await axios.get(`${API_URL}/posts/${id}`);

    dispatch(detailsFetched(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
// dispatch(fetchPosts);

// export function fetchPosts2() {
//   return function (dispatch, getState) {
//     ////
//   };
// }

// TIP: Write all thunks as if they needed a parameter
// this makes our lives easier when using them because we don't
// have to think if we need to call this function or not
// With this style you always call the thunk
export const fetchPosts2 = () => (dispatch, getState) => {};
// dispatch(fetchPosts2());

// dispatch(fetchPostById(id));

// export async function fetchPostByIdLong() {
//   return async function(dispatch, getState) {

//   }
// }
