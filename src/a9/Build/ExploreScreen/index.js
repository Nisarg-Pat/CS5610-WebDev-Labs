import React from "react";
import ExploreComponent from "../ExploreComponent"
import WhoToFollowList from "../WhoToFollowList";
import NavigationSidebar from "../NavigationSideBar";
import "../../../index.css"

const ExploreScreen = () => {
    return(
        <>
            <div className="row mt-2 mb-2">
                <div className="wd-navigation col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2">
                    <NavigationSidebar active={"explore"}/>
                </div>

                <div className="col-10 col-lg-7 col-xl-7 col-xxl-6">
                    <ExploreComponent/>
                </div>

                <div className="d-none d-lg-block col-lg-4 col-xl-3 col-xxl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </>
    )
}

export default ExploreScreen;