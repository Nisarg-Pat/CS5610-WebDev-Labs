import React from "react";

import posts from "../../../../reducers/data/tweets.json";
import TweetListItem from "./TweetListItem";

const TweetList = () => {
    return (
        <div className="list-group wd-list-item">
            {posts.map((thisPost, key) => <TweetListItem posts={thisPost} key={key}/>)}
        </div>
    )
}
export default TweetList;