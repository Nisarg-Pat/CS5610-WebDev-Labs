import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileEdit = () => {
    const profile = useSelector((state) => state.profile)[0];
    return(
        <div className="row pt-2">
            <div className="col-1 wd-flex wd-v-center pb-2">
                <i className="fas fa-times"/>
            </div>
            <div className="col-9 pb-2 wd-flex wd-v-center">
                <div className="wd-bold">
                    Edit
                </div>
            </div>
            <div className="col-2 pb-2">
                <button className="btn btn-primary p-2 wd-btn wd-tweet-btn">
                    Save
                </button>
            </div>
            <div className="wd-relative">
                <img src={profile.backImage} className="wd-profile-imgBack"/>
                <div className="wd-profile-inner-img">
                    <img src={profile.frontImage} className="wd-profile-imgFront"/>
                </div>
            </div>
            <div className="col-9"/>
            <div className="pt-4"/>
            <div className="pt-4"/>
            <div className="pt-3"/>
            <div className="col-12 pt-3">
                <label className="wd-editProfileInput-div">
                    <span className="wd-color-grey">Name</span><br/>
                    <input className="wd-editProfileInput" value={profile.name}/>
                </label>
            </div>

            <div className="col-12 pt-3">
                <label className="wd-editProfileInput-div">
                    <span className="wd-color-grey">Bio</span><br/>
                    <textarea className="wd-editProfileInput" value={profile.bio}>

                    </textarea>
                </label>
            </div>

            <div className="col-12 pt-3">
                <label className="wd-editProfileInput-div">
                    <span className="wd-color-grey">Location</span><br/>
                    <input className="wd-editProfileInput" value={profile.location}/>
                </label>
            </div>

            <div className="col-12 pt-3">
                <label className="wd-editProfileInput-div">
                    <span className="wd-color-grey">Website</span><br/>
                    <input className="wd-editProfileInput" value={profile.website} placeholder="Website"/>
                </label>
            </div>
        </div>
    )
}

export default ProfileEdit;