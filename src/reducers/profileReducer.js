import profile from "./data/profile.json"

const profileReducer = (state = profile, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default profileReducer;