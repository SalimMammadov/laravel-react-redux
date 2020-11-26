import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
// import Post from './Post';
const Post = lazy(() => import("./Post"));
import { getPosts } from "../redux/actions/postsActions";
import "../css/Post.css";
import Loader from "react-loader-spinner";

function Posts({ posts, getPosts }) {
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="row">
            <div className="posts" style={{ width: "100%" }}>
                {posts.map(item => (
                    <Suspense
                        key={item.id}
                        fallback={<Loader type="Oval">Loading...</Loader>}
                    >
                        <Post key={item.id} post={item} />
                    </Suspense>
                ))}
            </div>
        </div>
    );
}
function mapStateToProps(state) {
    return {
        posts: state.postsReducer
    };
}

const mapDispatchToProps = {
    getPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
