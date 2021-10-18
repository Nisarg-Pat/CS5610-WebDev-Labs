import NavigationSidebar from "../NavigationSideBar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

(function($) {
    $('#wd-explore').append(`
        <div class="row mt-2 mb-2">
            <div class="wd-navigation col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2">
                ${NavigationSidebar('home')}
            </div>
            
            <div class="col-10 col-lg-7 col-xl-7 col-xxl-6">
                ${PostList()}
            </div>
            
            <div class="d-none d-lg-block col-lg-4 col-xl-3 col-xxl-4">
                ${PostSummaryList()}    
            </div>
        </div>
    `)
})($);