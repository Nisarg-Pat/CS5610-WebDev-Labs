import profile from "./data/profile.json"

const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case "fetch-profile":
            return action.profile;
        case "update-profile":
            console.log("On update-profile");
            console.log(action.profile);
            return action.profile;
        default:
            return state;
    }
}

export default profileReducer;