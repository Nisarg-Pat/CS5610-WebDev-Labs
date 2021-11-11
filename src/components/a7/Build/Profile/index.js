import React from "react";
import {useSelector} from "react-redux";

const Profile = () => {
    const profile = useSelector((state) => state.profile)[0];
    const birthDate = new Date(profile.birthDate);
    console.log(birthDate);
    return(
        <div className="row pt-2">
            <div className="col-1 wd-flex wd-v-center pb-2">
                <i className="fas fa-arrow-left"/>
            </div>
            <div className="col-10 pb-2">
                <div className="wd-bold">
                    {profile.name}
                </div>
                <div className="wd-color-grey">
                    {profile.totalTweets} Tweets
                </div>
            </div>
            <div className="wd-relative">
                <img src={profile.backImage} className="wd-profile-imgBack"/>
                <div className="wd-profile-inner-img">
                    <img src={profile.frontImage} className="wd-profile-imgFront"/>
                </div>
            </div>
            <div className="col-9"/>
            <div className="col-3 pt-3 pe-4 ps-3">
                <button className="btn btn-primary p-2 wd-btn wd-tweet-btn">Edit Profile</button>
            </div>
            <div className="pt-4 wd-profile-name">
                {profile.name}
            </div>
            <div className="wd-color-grey">
                {profile.handle}
            </div>
            <div className="pt-3">
                {profile.bio}
            </div>
            <div className="wd-color-grey pt-4">
                <i className="fas fa-map-marker-alt pe-1"/> {profile.location}
                <i className="fas fa-birthday-cake ps-3 pe-1"/> Born {profile.birthDate}
                <i className="far fa-calendar-alt ps-3 pe-1"/> Joined {profile.dateJoined}
            </div>
            <div className="pt-2">
                <span className="wd-bold">
                    {profile.following}
                </span>
                <span className="wd-color-grey ps-1">
                    Following
                </span>
                <span className="wd-bold ps-3">
                    {profile.followers}
                </span>
                <span className="wd-color-grey ps-1">
                    Followers
                </span>
            </div>
        </div>
    );
}

export default Profile;