import React from "react";
import FadeIn from "react-lazyload-fadein";

function PostImage({ classname, image }) {
    return (
        <div>
           
                    <img
                        className={classname}
                        src={image}
                        alt=""
                        onLoad={onload}
                    />
        </div>
    );
}

export default PostImage;
