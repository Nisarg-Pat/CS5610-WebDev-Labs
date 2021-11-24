import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = "explore"
    }
) => {
    return (
        <>
            <div className="list-group wd-navigation-list">
                <Link to="/a9/practice"
                   className="list-group-item list-group-item-action wd-navigation-list-item"
                   aria-current="true">
                    <i className="fab fa-twitter wd-navigation-twitter"/> (Practice)
                </Link>
                <Link to="/a9/twitter/home"
                   className={`list-group-item list-group-item-action ${active === 'home' ? 'wd-navigation-list-item-active' : 'wd-navigation-list-item'}`}>
                    <div className="row">
                        <div className="col-1">
                            <i className="fas fa-home"/>
                        </div>
                        <div className="col-5 d-none d-xl-block wd-navigation-text">
                            Home
                        </div>
                    </div>
                </Link>
                <Link to="/a9/twitter/explore"
                   className={`list-group-item list-group-item-action ${active === 'explore' ? 'wd-navigation-list-item-active' : 'wd-navigation-list-item'}`}
                   aria-current="true">
                    <div className="row">
                        <div className="col-1">
                            <i className="fas fa-hashtag"/>
                        </div>
                        <div className="col-5 d-none d-xl-block wd-navigation-text">
                            Explore
                        </div>
                    </div>
                </Link>
                <Link to="#"
                   className={`list-group-item list-group-item-action ${active === 'notifications' ? 'wd-navigation-list-item-active' : 'wd-navigation-list-item'}`}
                   aria-current="true">
                    <div className="row">
                        <div className="col-1">
                            <i className="far fa-bell"/>
                        </div>
                        <div className="col-5 d-none d-xl-block wd-navigation-text">
                            Notifications
                        </div>
                    </div>

                </Link>
                <Link to="#" className={`list-group-item list-group-item-action ${active === 'messages'
                                       ? 'wd-navigation-list-item-active'
                                       : 'wd-navigation-list-item'}`}
                   aria-current="true">
                    <div className="row">
                        <div className="col-1">
                            <i className="far fa-envelope"/>
                        </div>
                        <div className="col-5 d-none d-xl-block wd-navigation-text">
                            Messages
                        </div>
                    </div>

                </Link>
                <Link to="#" className={`list-group-item list-group-item-action ${active === 'bookmarks'
                                       ? 'wd-navigation-list-item-active'
                                       : 'wd-navigation-list-item'}`}
                   aria-current="true">
                    <div className="row">
                        <div className="col-1">
                            <i className="far fa-bookmark"/>
                        </div>
                        <div className="col-5 d-none d-xl-block wd-navigation-text">
                            Bookmarks
                        </div>
                    </div>

                </Link>
                <Link to="#" className={`list-group-item list-group-item-action ${active === 'lists'
                                       ? 'wd-navigation-list-item-active'
                                       : 'wd-navigation-list-item'}`}
                   aria-current="true">
                    <div className="row">
                        <div className="col-1">
                            <i className="far fa-list-alt"/>
                        </div>
                        <div className="col-5 d-none d-xl-block wd-navigation-text">
                            Lists
                        </div>
                    </div>

                </Link>
                <Link to="/a9/twitter/profile" className={`list-group-item list-group-item-action ${active === 'profile'
                                       ? 'wd-navigation-list-item-active'
                                       : 'wd-navigation-list-item'}`}
                   aria-current="true">
                    <div className="row">
                        <div className="col-1">
                            <i className="far fa-user"/>
                        </div>
                        <div className="col-5 d-none d-xl-block wd-navigation-text">
                            Profile
                        </div>
                    </div>

                </Link>
                <Link to="#" className={`list-group-item list-group-item-action ${active === 'more'
                                       ? 'wd-navigation-list-item-active'
                                       : 'wd-navigation-list-item'}`}
                   aria-current="true">
                    <div className="row">
                        <div className="col-1">
                        <span className="fa-stack fa-stack wd-more-icon">
                            <i className="fas fa-ellipsis-h fa-stack-1x"/>
                            <i className="far fa-circle fa-stack-2x"/>
                        </span>
                        </div>
                        <div className="col-5 d-none d-xl-block wd-navigation-text">
                            More
                        </div>
                    </div>

                </Link>
            </div>
            <div>
                <button className="btn btn-primary wd-tweet-btn wd-btn mt-2">
                    <span className="d-none d-xl-block"> Tweet</span>
                    <span className="d-block d-xl-none">
                        <i className="fas fa-feather-alt"/></span>
                </button>
            </div>
        </>
    );
}
export default NavigationSidebar;
