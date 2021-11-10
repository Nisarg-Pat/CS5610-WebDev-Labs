import React from "react";

import post from "./post.json";
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = () => {
    return (
        <>
            <div className="list-group wd-list-item">
                <div>
                    What's Happening
                </div>

                {post.map((thisPost, key) => <PostSummaryItem post={thisPost} key={key}/>)}
            </div>
        </>

    )
}
export default PostSummaryList;