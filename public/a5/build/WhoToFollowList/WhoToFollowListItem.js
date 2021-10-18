const WhoToFollowListItem = (who) => {
    return (`
        <a href="#" class="list-group-item wd-who-to-follow-item">
            <div class="row">
                <div class="col-lg-2 col-xl-3 col-xxl-2">
                    <img class="wd-img-circle" src=${who.avatarIcon}>
                </div>
                <div class="col-lg-7 col-xl-6 col-xxl-8 wd-flex wd-v-center ps-lg-4 ps-xl-0 ps-xxl-3 wd-who-to-follow-text">
                    <div>
                        <div class="wd-bold wd-white"> 
                            ${who.userName} 
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="wd-color-grey">@${who.handle}</div>
                    </div>
                </div>
                <div class="col-lg-3 col-xl-3 col-xxl-2 wd-flex wd-v-center wd-h-right">
                    <button class="btn btn-primary wd-btn wd-btn-follow">Follow</button>
                </div>
            </div>
        </a>
    `);
}
export default WhoToFollowListItem;