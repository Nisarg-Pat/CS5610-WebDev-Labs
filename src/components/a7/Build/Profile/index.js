import React from "react";
import {useSelector} from "react-redux";

const Profile = () => {
    const profile = useSelector((state) => state.profile)[0];
    console.log(profile);
    return(
        <div className="row p-2">
            <div className="col-1 wd-flex wd-v-center">
                <i className="fas fa-arrow-left"/>
            </div>
            <div className="col-10">
                <div className="wd-bold">
                    {profile.name}
                </div>
                <div className="wd-color-grey">
                    {profile.totalTweets} tweets
                </div>
            </div>
        </div>
    );
}

export default Profile;