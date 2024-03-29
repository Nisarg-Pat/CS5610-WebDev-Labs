const TWEET_API = process.env.NODE_ENV === 'development'
                  ? "http://localhost:4000/rest/tweets"
                  : "https://web-dev-node-nisargpat.herokuapp.com/rest/tweets";

export const fetchAllTweets = (dispatch) => {
    fetch(TWEET_API)
        .then(response => response.json())
        .then(tweets =>
                  dispatch({
                               type: 'fetch-all-tweets',
                               tweets
                           })
        );
}

export const postNewTweet = (dispatch, newTweet) =>
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json()).then(newTweet =>
              dispatch({type: "create-tweet", newTweet})
        );

export const deleteTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}`, {
        method: 'DELETE'
    }).then(response => dispatch({
                                     type: 'delete-tweet',
                                     tweet: tweet
                                 }));

export const likeTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}/like`, {
        method: 'PUT'
    })
        .then(response =>
                  dispatch({
                               type: 'like-tweet',
                               tweet
                           }));
