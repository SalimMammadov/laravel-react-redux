import Axios from 'axios'
import * as types from './types'
import axios from 'axios'

export function getPostsSuccess(posts) {
    return {
      type: types.GET_POSTS,
      payload: posts,
    };
  }
  
  
  export function getPosts() {
    return function (dispatch) {
      return axios.get('/posts').then((r) => {
        console.log(r.data)
        dispatch(getPostsSuccess(r.data));
      });
    };
  }

  export function addPost(post) {
    return function (dispatch) {
      return axios.post('/posts',post).then((r) => {
        dispatch({
          type: types.ADD_POST,
          payload : r.data
        });
      });
    };
  }

  export function deletePost(id){
    return function(dispatch){
        return axios.delete('/posts/'+id).then((r)=>{
          console.log(r.data)
          dispatch({
            type : types.DELETE_POST,
            payload :id
          })
        })
    }
  }