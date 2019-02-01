import React from "react";


function Thumbnail({ src }) {
    return (
        <img
            className="img-thumbnail"
            alt="Book Cover"
            src={src}
        />
    );
}

export default Thumbnail;