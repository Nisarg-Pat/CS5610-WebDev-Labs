const NavigationSidebar = (active) => {
    return(`
            <div class="list-group wd-navigation-list">
            <a href="#"
               class="list-group-item list-group-item-action wd-navigation-list-item"
               aria-current="true">
                <i class="fab fa-twitter wd-navigation-twitter"></i>
            </a>
            <a href="../HomeScreen/homescreen.html" class="list-group-item list-group-item-action ${active === 'home' ? 'wd-navigation-list-item-active' : 'wd-navigation-list-item'}">
                <div class="row">
                    <div class="col-1">
                        <i class="fas fa-home"></i>
                    </div>
                    <div class="col-5 d-none d-xl-block wd-navigation-text">
                        Home
                    </div>
                </div>
            </a>
            <a href="../ExploreScreen/explore.html" class="list-group-item list-group-item-action ${active === 'explore' ? 'wd-navigation-list-item-active' : 'wd-navigation-list-item'}"
               aria-current="true">
                <div class="row">
                    <div class="col-1">
                        <i class="fas fa-hashtag"></i>
                    </div>
                    <div class="col-5 d-none d-xl-block wd-navigation-text">
                        Explore
                    </div>
                </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action ${active === 'notifications' ? 'wd-navigation-list-item-active' : 'wd-navigation-list-item'}"
               aria-current="true">
                <div class="row">
                    <div class="col-1">
                        <i class="far fa-bell"></i>
                    </div>
                    <div class="col-5 d-none d-xl-block wd-navigation-text">
                        Notifications
                    </div>
                </div>

            </a>
            <a href="#" class="list-group-item list-group-item-action ${active === 'messages' ? 'wd-navigation-list-item-active' : 'wd-navigation-list-item'}"
               aria-current="true">
                <div class="row">
                    <div class="col-1">
                        <i class="far fa-envelope"></i>
                    </div>
                    <div class="col-5 d-none d-xl-block wd-navigation-text">
                        Messages
                    </div>
                </div>

            </a>
            <a href="#" class="list-group-item list-group-item-action ${active === 'bookmarks' ? 'wd-navigation-list-item-active' : 'wd-navigation-list-item'}"
               aria-current="true">
                <div class="row">
                    <div class="col-1">
                        <i class="far fa-bookmark"></i>
                    </div>
                    <div class="col-5 d-none d-xl-block wd-navigation-text">
                        Bookmarks
                    </div>
                </div>

            </a>
            <a href="#" class="list-group-item list-group-item-action ${active === 'lists' ? 'wd-navigation-list-item-active' : 'wd-navigation-list-item'}"
               aria-current="true">
                <div class="row">
                    <div class="col-1">
                        <i class="far fa-list-alt"></i>
                    </div>
                    <div class="col-5 d-none d-xl-block wd-navigation-text">
                        Lists
                    </div>
                </div>

            </a>
            <a href="#" class="list-group-item list-group-item-action ${active === 'profile' ? 'wd-navigation-list-item-active' : 'wd-navigation-list-item'}"
               aria-current="true">
                <div class="row">
                    <div class="col-1">
                        <i class="far fa-user"></i>
                    </div>
                    <div class="col-5 d-none d-xl-block wd-navigation-text">
                        Profile
                    </div>
                </div>

            </a>
            <a href="#" class="list-group-item list-group-item-action ${active === 'more' ? 'wd-navigation-list-item-active' : 'wd-navigation-list-item'}"
               aria-current="true">
                <div class="row">
                    <div class="col-1">
                        <span class="fa-stack fa-stack wd-more-icon">
                            <i class="fas fa-ellipsis-h fa-stack-1x"></i>
                            <i class="far fa-circle fa-stack-2x"></i>
                        </span>
                    </div>
                    <div class="col-5 d-none d-xl-block wd-navigation-text">
                        More
                    </div>
                </div>

            </a>
        </div>
        <div>
            <button class="btn btn-primary wd-tweet-btn wd-btn mt-2">
                <span class="d-none d-xl-block"> Tweet</span>
                <span class="d-block d-xl-none"><i class="fas fa-feather-alt"></i></span>
            </button>
        </div>
    `);
}
export default NavigationSidebar;
