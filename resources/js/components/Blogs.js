import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import "../css/Blogs.css";
import Blog from "./Blog";
import { getBlogs } from "../redux/actions/blogsActions";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Blogs({ blogs, getBlogs }) {
    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <div className="blogs ">
            <div className="add__blogs mb-2">
                <Link className="btn btn-info" to="/saveblog">
                    Add new
                </Link>
            </div>

            {blogs?.map(blog => (
                <Blog key={blog.id} blog={blog}></Blog>
            ))}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        blogs: state.blogsReducer
    };
}

const mapDispatchToProps = {
    getBlogs
};

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
