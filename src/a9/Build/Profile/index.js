import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {getCurrentProfile} from "../../services/profileService";

const getDateString = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date(date);
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate() + 1);
    const year = dateObj.getFullYear();
    return month + '\n' + day + ',' + year;
}

const Profile = () => {
    const dispatch = useDispatch();
    const profileSelector = (state) => state.profile;
    const profile = useSelector(profileSelector);
    useEffect(() => getCurrentProfile(dispatch), [dispatch]);
    const history = useHistory();
    const backPressHandler = () => {
        history.push("/a9/twitter/home");
    }
    return (
        <div className="row pt-2">
            <div className="col-1 wd-flex wd-v-center pb-2 wd-pointer"
                 onClick={backPressHandler}>
                <i className="fas fa-arrow-left fa-2x ps-2"/>
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
                <img src={profile.backImage} className="wd-profile-imgBack" alt="Profile Back"/>
                <div className="wd-profile-inner-img">
                    <img src={profile.frontImage} className="wd-profile-imgFront" alt="Profile Front"/>
                </div>
            </div>
            <div className="col-9"/>
            <div className="col-3 pt-3 pe-4 ps-3">
                <Link to="/a9/twitter/editProfile">
                    <button className="btn btn-primary p-2 wd-btn wd-tweet-btn">
                        Edit Profile
                    </button>
                </Link>
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
            {profile.website !== undefined ?
                <div className="pt-3 wd-blue">
                    {profile.website}
                </div>:
                 <></>
            }
            <div className="wd-color-grey pt-4">
                <i className="fas fa-map-marker-alt pe-1"/> {profile.location}
                <i className="fas fa-birthday-cake ps-3 pe-1"/> Born {getDateString(
                profile.birthDate)}
                <i className="far fa-calendar-alt ps-3 pe-1"/> Joined {profile.dateJoined}
            </div>
            <div className="pt-2 pb-2">
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