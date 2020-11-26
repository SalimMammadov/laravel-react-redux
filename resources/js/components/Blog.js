import React from "react";
import { Link } from "react-router-dom";
import "../css/Blog.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Blog({ blog }) {
    return (
        <div className="blog" id={blog.id}>
            <LazyLoadImage
                effect="blur"
                className="blog__image"
                src={blog.image}
                alt=""
                placeholderSrc="/loader.gif"
            />
            <div className="blog__body">
                <div className="blog__title">
                    <h4>{blog.title}</h4>
                    <div className="blog__edit">
                        <Link to={"/saveblog/" + blog.id}>
                            <i className="fa fa-pen"></i>
                        </Link>
                    </div>
                </div>
                <p>{blog.description}</p>
            </div>
        </div>
    );
}

export default Blog;
