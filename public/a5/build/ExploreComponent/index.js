import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class="wd-tweets">
            <div class="row wd-tweets-search-settings">
                <div class="col-11 wd-tweets-search">
            <span>
                <i class="fas fa-search wd-search-icon"></i>
            </span>
                    <input type="email" class="form-control wd-search-input"
                           placeholder="Search Twitter">
                </div>
                <div class="col-1 wd-flex wd-h-right wd-v-center">
                    <a href="explore-settings.html">
                        <i class="fas fa-cog wd-cog"></i>
                    </a>
                </div>
            </div>
            <div class="wd-B">
                <ul class="nav nav-tabs mt-2 wd-nav">
                    <li class="nav-item">
                        <a class="nav-link wd-tweet-nav-item" href="for-you.html">
                            <span class="wd-tweet-nav-item-active">
                                For You
                            </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-tweet-nav-item" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-tweet-nav-item" href="covid.html">COVID-19</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-tweet-nav-item" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-none d-md-block wd-tweet-nav-item" href="sports.html">Sports</a>
                    </li>
    
                    <li class="nav-item ">
                        <a class="nav-link d-none d-md-block d-lg-none d-xl-block wd-tweet-nav-item"
                           href="entertainment.html">
                            Entertainment
                        </a>
                    </li>
                </ul>
            </div>
    
            <div class="wd-tweet-img-div">
                <img class="wd-tweet-img" src="../images/SpaceX.png">
            </div>
    
            <div class="wd-tweet-img-div">
                <div class="wd-tweet-img-desc">
                    SpaceX's Starship
                </div>
            </div>
            
            ${PostSummaryList()}
        </div>
    `);
}
export default ExploreComponent;