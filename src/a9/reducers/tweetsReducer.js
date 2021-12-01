const tweetsReducer = (state = [], action) => {
    switch (action.type) {
        case "create-tweet":
            return ([
                action.newTweet,
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
        case 'fetch-all-tweets':
            return action.tweets;
        default:
            return state;
    }

}

export default tweetsReducer;