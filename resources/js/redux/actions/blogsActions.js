import * as types from "./types";
import axios from "axios";

export function getBlogs() {
    return function(dispatch) {
        return axios.get("/all/blogs").then(r => {
            dispatch(getBlogsSuccess(r.data));
        });
    };
}

export function getBlogsSuccess(blogs) {
    return {
        type: types.GET_BLOGS,
        payload: blogs
    };
}

export function saveBlogSuccess(success) {
    return {
        type: types.SAVE_BLOGS_SUCCESS,
        payload: success
    };
}

export function saveBlog(blog) {
    return function(dispatch) {
        if (blog.id) {
            return axios
                .put("/blogs/" + blog.id, blog, config)
                .then(r => dispatch(saveBlogSuccess(r.data)));
        } else {
            return axios
                .post("/blogs/", blog, config)
                .then(r => dispatch(saveBlogSuccess(r.data)));
        }
    };
}
