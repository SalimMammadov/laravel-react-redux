import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import BlogForm from "./BlogForm";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { saveBlog } from "../redux/actions/blogsActions";

function AddOrUpdateBlog({ dispatch }) {
    const { blogId } = useParams();
    const [blog, setBlog] = useState([]);
    const [progress, setProgress] = useState(0);
    const history = useHistory();
    useEffect(() => {
        if (blogId)
            axios.get("/fetch/specificblog/" + blogId).then(r => {
                setBlog(r.data);
            });
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;
        setBlog(oldBlog => ({
            ...oldBlog,
            [name]: value
        }));
    }

    function onSave(event) {
        event.preventDefault();
        dispatch(saveBlog(blog))
            .then(r => {
                history.goBack(), swal("OK", r.payload.success, "success");
            })
            .catch(e => alert(e.message));
    }

    return (
        <div>
            <center>
                <progress
                    className="p-2 mt-3"
                    max="100"
                    style={{ width: "300px" }}
                    value={progress}
                ></progress>
                <BlogForm
                    onSave={onSave}
                    onChange={handleChange}
                    blog={blog}
                ></BlogForm>
            </center>
        </div>
    );
}

export default connect()(AddOrUpdateBlog);
