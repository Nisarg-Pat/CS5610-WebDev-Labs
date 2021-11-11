import profile from "./data/profile.json"

const profileReducer = (state = profile, action) => {
    switch (action.type) {
        case "profileChange":
            state = [{...action.profile}];
            return state;
        default:
            return state;
    }
}

export default profileReducer;