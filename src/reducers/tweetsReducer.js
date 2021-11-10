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
                "title": action.tweet,
                "comment": 123,
                "retweet": 234,
                "like": 345
            };
            console.log(tweet);
            console.log(state);
            return ([
                tweet,
                ...state]);
        case "delete-tweet":
            return state.filter(tweet => tweet._id !== action.tweet._id);
        default:
            return(state);
    }

}

export default tweetsReducer;