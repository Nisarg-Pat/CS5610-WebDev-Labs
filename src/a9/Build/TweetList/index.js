import React, {useEffect} from "react";

import TweetListItem from "./TweetListItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTweets} from "../../services/tweetService";

const TweetList = () => {
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), [dispatch])

    const selectAllTweets = (state) => state.tweets;
    const tweets = useSelector(selectAllTweets);
    return (
        <div className="list-group wd-list-item">
            {tweets.map((tweet, key) => <TweetListItem posts={tweet} key={key}/>)}
        </div>
    )
}
export default TweetList;