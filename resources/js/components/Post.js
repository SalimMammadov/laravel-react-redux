import React from "react";
import { connect } from "react-redux";
import "../css/Post.css";
import { deletePost } from "../redux/actions/postsActions";
import Loader from "react-loader-spinner";

function Post({ post, dispatch }) {
    return (
        <div>
            <ul className="list-group">
                <li className="list__container list-group-item  list-group-item list-group-item-action">
                    <div className="list__container">
                        <img className="post__image" src={post.image} alt="" />
                        <div className="list__info">
                            <div className="post__title">{post.title}</div>
                            <div className="post__description">
                                {post.description}
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => dispatch(deletePost(post.id))}
                        className="list__button btn btn-danger"
                    >
                        <i className="fa fa-trash">Delete</i>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default connect()(Post);
