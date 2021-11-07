import React from "react";

import post from "./post.json";
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = () => {
    return (
        <div className="list-group wd-list-item">
            {post.map((thisPost, key) => <PostSummaryItem post={thisPost} key={key}/>)}
        </div>
    )
}
export default PostSummaryList;