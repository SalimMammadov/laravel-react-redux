import React from "react";

import "../css/BlogForm.css";

function BlogForm({ blog, onChange, onSave }) {
    return (
        <div className="blogForm">
            <form onSubmit={onSave}>
                <div className="form-group">
                    <input
                        name="title"
                        value={blog.title || ""}
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        placeholder="Title"
                    />
                </div>
                <div className="form-group">
                    <input
                        name="description"
                        value={blog.description || ""}
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        placeholder="Description"
                    />
                </div>
                <div className="form-group">
                    <input
                        name="image"
                        value={blog.image || ""}
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        placeholder="Image URL"
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    OK
                </button>
            </form>
        </div>
    );
}

export default BlogForm;
