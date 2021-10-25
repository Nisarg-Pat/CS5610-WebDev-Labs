import React from "react";

const WhoToFollowListItem = ({
 who = {
     avatarIcon: '../../../images/nasa.png',
     userName: 'NASA',
     handle: 'NASA',
 }
}) => {
    return (
        <div className="list-group-item wd-who-to-follow-item">
            <div className="row">
                <div className="col-lg-2 col-xl-3 col-xxl-2">
                    <img className="wd-img-circle" alt={who.handle} src={who.avatarIcon}/>
                </div>
                <div
                    className="col-lg-7 col-xl-6 col-xxl-8 wd-flex wd-v-center ps-lg-4 ps-xl-0 ps-xxl-3 wd-who-to-follow-text">
                    <div>
                        <div className="wd-bold wd-white">
                            {who.userName}
                            <i className="fas fa-check-circle"/>
                        </div>
                        <div className="wd-color-grey">@{who.handle}</div>
                    </div>
                </div>
                <div className="col-lg-3 col-xl-3 col-xxl-2 wd-flex wd-v-center wd-h-right">
                    <button className="btn btn-primary wd-btn wd-btn-follow">Follow</button>
                </div>
            </div>
        </div>
    );
}
export default WhoToFollowListItem;