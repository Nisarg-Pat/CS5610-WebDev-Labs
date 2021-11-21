import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const ProfileEdit = () => {
    const profileSelector = (state) => state.profile;
    const profile = useSelector(profileSelector);
    const [profileState, setProfile] = useState(profile);
    const dispatch = useDispatch();
    const history = useHistory();

    const profileChangeHandler = (change, inputType) => {
        let newProfile = profileState;
        switch (inputType) {
            case "nameChange":
                newProfile = {
                    ...profileState,
                    name: change
                }
                setProfile(newProfile);
                break;
            case "handleChange":
                newProfile = {
                    ...profileState,
                    handle: change
                }
                setProfile(newProfile);
                break;
            case "bioChange":
                newProfile = {
                    ...profileState,
                    bio: change
                }
                setProfile(newProfile);
                break;
            case "locationChange":
                newProfile = {
                    ...profileState,
                    location: change
                }
                setProfile(newProfile);
                break;
            case "websiteChange":
                newProfile = {
                    ...profileState,
                    website: change
                }
                setProfile(newProfile);
                break;
            case "birthDateChange":
                newProfile = {
                    ...profileState,
                    birthDate: change
                }
                setProfile(newProfile);
                break;
            default:
                break;
        }
    }

    const saveClickHandler = () => {
        const action = {
            type: "update-profile",
            profile: profileState
        }
        dispatch(action);
        history.push("/a7/twitter/profile");
    }

    const backPressHandler = () => {
        history.push("/a7/twitter/profile");
    }

    return (
        <div className="row pt-2">
            <div className="col-1 wd-flex wd-v-center pb-2 wd-pointer"
                 onClick={backPressHandler}>
                <i className="fas fa-times ps-3"/>
            </div>
            <div className="col-9 pb-2 wd-flex wd-v-center">
                <div className="wd-bold wd-fontSize-20">
                    Edit
                </div>
            </div>
            <div className="col-2 pb-2">
                <button className="btn btn-primary p-2 wd-btn wd-tweet-btn"
                        onClick={saveClickHandler}>
                    Save
                </button>
            </div>
            <div className="wd-relative">
                <img src={profile.backImage} className="wd-profile-imgBack" alt="Profile Back"/>
                <div className="wd-profile-inner-img">
                    <img src={profile.frontImage} className="wd-profile-imgFront" alt="Profile Front"/>
                </div>
            </div>
            <div className="col-9"/>
            <div className="pt-4"/>
            <div className="pt-4"/>
            <div className="pt-3"/>
            <div className="col-12 pt-3">
                <label className="wd-editProfileInput-div">
                    <span className="wd-color-grey">Name</span><br/>
                    <input onChange={(event) => {
                        profileChangeHandler(event.target.value, "nameChange")
                    }}
                           className="wd-editProfileInput"
                           value={profileState.name}/>
                </label>
            </div>

            <div className="col-12 pt-3">
                <label className="wd-editProfileInput-div">
                    <span className="wd-color-grey">Handle</span><br/>
                    <input onChange={(event) => {
                        profileChangeHandler(event.target.value, "handleChange")
                    }}
                           className="wd-editProfileInput"
                           value={profileState.handle}/>
                </label>
            </div>

            <div className="col-12 pt-3">
                <label className="wd-editProfileInput-div">
                    <span className="wd-color-grey">Bio</span><br/>
                    <textarea className="wd-editProfileBio"
                              value={profileState.bio}
                              onChange={(event) => {
                                  profileChangeHandler(event.target.value, "bioChange")
                              }}>
                    </textarea>
                </label>
            </div>

            <div className="col-12 pt-3">
                <label className="wd-editProfileInput-div">
                    <span className="wd-color-grey">Location</span><br/>
                    <input className="wd-editProfileInput"
                           value={profileState.location}
                           onChange={(event) => {
                               profileChangeHandler(event.target.value, "locationChange")
                           }}/>
                </label>
            </div>

            <div className="col-12 pt-3">
                <label className="wd-editProfileInput-div">
                    <span className="wd-color-grey">Website</span><br/>
                    <input className="wd-editProfileInput"
                           value={profileState.website}
                           placeholder="Website"
                           onChange={(event) => {
                               profileChangeHandler(event.target.value, "websiteChange")
                           }}/>
                </label>
            </div>

            <div className="col-12 pt-3 pb-2">
                <label className="wd-editProfileInput-div">
                    <span className="wd-color-grey">Birth Date</span><br/>
                    <input className="wd-editProfileDate"
                           type="date"
                           value={profileState.birthDate}
                           placeholder="Website"
                           onChange={(event) => {
                               profileChangeHandler(event.target.value, "birthDateChange")
                           }}/>
                </label>
            </div>
        </div>
    )
}

export default ProfileEdit;