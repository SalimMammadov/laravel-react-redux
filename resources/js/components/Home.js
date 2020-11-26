import React, { lazy, Suspense, useState } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import "../css/Home.css";
import { addPost } from "../redux/actions/postsActions";
import Posts from "./Posts";
// const Posts = lazy(() => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(import("./Posts")),1000);
//     });
//   });

// MAIN
function Home({ dispatch }) {
    //
    const [post, setPost] = useState({
        title: "",
        description: ""
    });

    const [isPostsVisible, setPostsVisible] = useState(false);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setPost({
            ...post,
            [name]: value
        });
    }

    function createPost(e) {
        e.preventDefault();
        dispatch(addPost(post));
    }

    function showPosts() {
        setPostsVisible(true);
    }

    return (
        <div className="home">
            <div className="row justify-content-center">
                <div className="card home__card">
                    <div className="card-header">Creating Posts</div>
                    <div className="card-body">
                        <form id="post__form" onSubmit={createPost}>
                            <h5>Title</h5>
                            <input
                                value={post.title}
                                onChange={handleChange}
                                name="title"
                                className="post_input form-control"
                            />

                            <h5>Description</h5>
                            <input
                                value={post.description}
                                onChange={handleChange}
                                name="description"
                                className="post_input form-control"
                            />
                            <button type="submit" className="btn btn-info">
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* <button onClick={showPosts} className="mt-3 btn btn-secondary">
                Display Posts (for react lazy,suspend)
            </button> */}
            {/* {isPostsVisible && (
                <Suspense
                    fallback={
                        <div className="preloader">
                        <Loader
                            color="#00BFFF"
                            height={100}
                            width={100}
                            type="Oval"
                        ></Loader>
                        </div>
                    }
                > */}
            <Posts></Posts>
            {/* </Suspense> */}
            {/* )} */}
        </div>
    );
}
export default connect()(Home);
