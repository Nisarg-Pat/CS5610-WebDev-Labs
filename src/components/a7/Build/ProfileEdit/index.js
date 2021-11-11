import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const ProfileEdit = () => {
    const profile = useSelector((state) => state.profile)[0];
    const [profileState, setProfile] = useState({...profile});
    console.log(profileState);
    const dispatch = useDispatch();
    const history = useHistory();

    const profileChangeHandler = (change, inputType) => {
        let newProfile = profileState;
        switch (inputType) {
            case "nameChange":
                newProfile = {
                    ...profile,
                    name:change
                }
                setProfile(newProfile);
                break;
            case "bioChange":
                newProfile = {
                    ...profile,
                    bio:change
                }
                setProfile(newProfile);
                break;
            case "locationChange":
                newProfile = {
                    ...profile,
                    location:change
                }
                setProfile(newProfile);
                break;
            case "websiteChange":
                newProfile = {
                    ...profile,
                    website:change
                }
                setProfile(newProfile);
                break;
            default:
                break;
        }
    }

    const saveClickHandler = () => {
        const action = {
            type: "profileChange",
            profile: profileState
        }
        dispatch(action);
        history.push("/a7/twitter/profile");
    }

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
                <button className="btn btn-primary p-2 wd-btn wd-tweet-btn"
                        onClick={saveClickHandler}>
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
                    <input onChange={(event) => {
                        profileChangeHandler(event.target.value, "nameChange")
                    }}
                           className="wd-editProfileInput"
                           value={profileState.name}/>
                </label>
            </div>

            <div className="col-12 pt-3">
                <label className="wd-editProfileInput-div">
                    <span className="wd-color-grey">Bio</span><br/>
                    <textarea className="wd-editProfileInput"
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
        </div>
    )
}

export default ProfileEdit;