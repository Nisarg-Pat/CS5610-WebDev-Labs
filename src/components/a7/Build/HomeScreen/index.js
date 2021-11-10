import React from "react";

import NavigationSidebar from "../NavigationSideBar";
import PostSummaryList from "../PostSummaryList";
import TweetList from "../TweetList";

const HomeScreen = () => {
    return(
        <div className="row mt-2 mb-2">
            <div className="wd-navigation col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2">
                <NavigationSidebar active={"home"}/>
            </div>

            <div className="col-10 col-lg-7 col-xl-7 col-xxl-6">
                <TweetList/>
            </div>

            <div className="d-none d-lg-block col-lg-4 col-xl-3 col-xxl-4">
                <div className="wd-style-right">
                    <PostSummaryList title="What's happening"/>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;