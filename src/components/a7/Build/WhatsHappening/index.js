import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        dispatch({type: "create-tweet", tweet: whatsHappening});
    }

    return (
        <div className="row wd-white wd-border-bottom">
            <div className="col-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                <img src={"/images/react.png"} className="wd-img-circle" alt={"Alt name"}/>
            </div>
            <div
                className="col-10 col-sm-10 col-md-11 col-lg-11 col-xl-11 col-xxl-11 wd-post-content">
                <textarea value={whatsHappening}
                          onChange={(event => setWhatsHappening(event.target.value))}
                          className={""}>
            </textarea>
                <button onClick={tweetClickHandler} className="btn btn-primary wd-tweet-btn2 wd-btn mt-2">
                    Tweet
                </button>
            </div>

        </div>
    )
}

export default WhatsHappening;