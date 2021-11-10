import tweets from "./data/tweets.json";

const tweetsReducer = (state = tweets, action) => {
    switch (action.type) {
        case "create-tweet":
            const tweet = {
                _id: (new Date()).getTime() + '',
                "userImage": "/images/react.png",
                "userName": "ReactJS",
                "topic": "Web Development",
                "userHandle": "ReactJS",
                "verified": false,
                "time": "2h",
                "title": action.tweetTitle,
                "comment": 123,
                "retweet": 234,
                "like": 345,
                "liked": false
            };
            console.log(tweet);
            console.log(state);
            return ([
                tweet,
                ...state]);
        case "delete-tweet":
            return state.filter(tweet => tweet._id !== action.tweet._id);
        case "like-tweet":
            return state.map(tweet => {
                if (tweet._id === action.tweet._id) {
                    if (!tweet.liked) {
                        tweet.liked = true;
                        tweet.like++;
                    } else {
                        tweet.liked = false;
                        tweet.like--;
                    }
                }
                return tweet;
            })
        default:
            return (state);
    }

}

export default tweetsReducer;