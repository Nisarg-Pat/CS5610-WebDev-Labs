import React from "react";

import TweetListItem from "./TweetListItem";
import {useSelector} from "react-redux";

const TweetList = () => {
    const posts = useSelector((state) => state.tweets);
    return (
        <div className="list-group wd-list-item">
            {posts.map((thisPost, key) => <TweetListItem posts={thisPost} key={key}/>)}
        </div>
    )
}
export default TweetList;