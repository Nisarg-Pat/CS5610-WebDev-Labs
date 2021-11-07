import React from "react";

import posts from "./posts.json";
import PostItem from "./PostItem";

const PostList = () => {
    return (
        <div className="list-group wd-list-item">
            {posts.map((thisPost, key) => <PostItem posts={thisPost} key={key}/>)}
        </div>
    )
}
export default PostList;