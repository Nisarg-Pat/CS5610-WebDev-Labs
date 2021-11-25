import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {postNewTweet} from "../../services/tweetService";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        const newTweet = {
            _id: (new Date()).getTime(),
            "userImage": "/images/react.png",
            "userName": "ReactJS",
            "topic": "Web Development",
            "userHandle": "ReactJS",
            "verified": false,
            "time": "2h",
            "title": whatsHappening,
            "comment": 123,
            "retweet": 234,
            "like": 345,
            "liked": false
        };
        postNewTweet(dispatch({type: "create-tweet", newTweet}), newTweet);
    }
    const tweetClickHandler2 = () => {
        const newTweet = {
            _id: (new Date()).getTime(),
            "userImage": "/images/react.png",
            "userName": "ReactJS",
            "image": "/images/webdev.png",
            "userHandle": "ReactJS",
            "verified": false,
            "time": "2h",
            "title": whatsHappening,
            "comment": 123,
            "retweet": 234,
            "like": 345,
            "liked": false
        };
        postNewTweet(dispatch({type: "create-tweet", newTweet}), newTweet);
    }

    return (
        <div className="row wd-white wd-border-bottom p-3">
            <div className="col-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                <img src={"/images/react.png"} className="wd-img-circle" alt={"Alt name"}/>
            </div>
            <div className="col-10 col-sm-10 col-md-11 col-lg-11 col-xl-11 col-xxl-11 wd-post-content">
                <textarea value={whatsHappening}
                          onChange={(event => setWhatsHappening(event.target.value))}
                          className="wd-whatsHappeningTextArea"
                            placeholder="What's happening">
                </textarea>
                <div className="row wd-v-center">
                    <div className="col-10">
                        <i onClick={tweetClickHandler2} className="fas fa-image wd-blue wd-padding-10px wd-pointer"/>
                        <i className="fas fa-chart-line wd-blue wd-padding-10px"/>
                        <i className="far fa-smile wd-blue wd-padding-10px"/>
                        <i className="far fa-calendar wd-blue wd-padding-10px"/>
                    </div>
                    <div className="col-2">
                            <button onClick={tweetClickHandler} className="btn btn-primary wd-tweet-btn2 wd-btn">
                                Tweet
                            </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WhatsHappening;