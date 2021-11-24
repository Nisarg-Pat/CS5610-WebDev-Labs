import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (
        <div className="wd-tweets">
            <div className="row wd-tweets-search-settings">
                <div className="col-11 wd-tweets-search">
            <span>
                <i className="fas fa-search wd-search-icon"/>
            </span>
                    <input type="email" className="form-control wd-search-input"
                           placeholder="Search Twitter"/>
                </div>
                <div className="col-1 wd-flex wd-h-right wd-v-center">
                    <a href="explore-settings.html">
                        <i className="fas fa-cog wd-cog"/>
                    </a>
                </div>
            </div>
            <div className="wd-B">
                <ul className="nav nav-tabs mt-2 wd-nav">
                    <li className="nav-item">
                        <a className="nav-link wd-tweet-nav-item" href="for-you.html">
                            <span className="wd-tweet-nav-item-active">
                                For You
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wd-tweet-nav-item" href="trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wd-tweet-nav-item" href="covid.html">COVID-19</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wd-tweet-nav-item" href="news.html">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link d-none d-md-block wd-tweet-nav-item"
                           href="sports.html">Sports</a>
                    </li>

                    <li className="nav-item ">
                        <a className="nav-link d-none d-md-block d-lg-none d-xl-block wd-tweet-nav-item"
                           href="entertainment.html">
                            Entertainment
                        </a>
                    </li>
                </ul>
            </div>

            <div className="wd-tweet-img-div">
                <img className="wd-tweet-img" src={"/images/SpaceX.png"} alt={`tweet-img`}/>
            </div>

            <div className="wd-tweet-img-div">
                <div className="wd-tweet-img-desc">
                    SpaceX's Starship
                </div>
            </div>

            <PostSummaryList/>
        </div>
    );
}
export default ExploreComponent;