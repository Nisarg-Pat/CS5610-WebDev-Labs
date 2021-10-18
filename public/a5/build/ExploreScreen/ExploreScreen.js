import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreComponent/index.js"
import WhoToFollowList from "../WhoToFollowList/index.js";

(function($) {
    $('#wd-explore').append(`
        <div class="row mt-2 mb-2">
            <div class="wd-navigation col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2">
                ${NavigationSidebar('explore')}
            </div>
            
            <div class="col-10 col-lg-7 col-xl-7 col-xxl-6">
                ${ExploreComponent()}
            </div>

            <div class="d-none d-lg-block col-lg-4 col-xl-3 col-xxl-4">
                ${WhoToFollowList()}    
            </div>
        </div>
    `)
})($);