const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case "fetch-profile":
            return action.profile;
        case "update-profile":
            return action.profile;
        default:
            return state;
    }
}

export default profileReducer;