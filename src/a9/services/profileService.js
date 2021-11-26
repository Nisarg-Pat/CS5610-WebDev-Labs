const PROFILE_API = process.env.NODE_ENV === 'development'
                    ? "http://localhost:4000/rest/profiles"
                    : "https://web-dev-node-nisargpat.herokuapp.com/api/profiles";

export const getCurrentProfile = (dispatch, setProfile) => {
    fetch(PROFILE_API).then((response) => response.json())
        .then((profile) => {
            dispatch({
                 type: 'fetch-profile',
                 profile
             })
            if(setProfile !== undefined) {
                setProfile(profile);
            }
        })
}

export const updateCurrentProfile = (dispatch, newProfile) => {
    fetch(`${PROFILE_API}/61a02bd259c27f1fa37d274c`, {
        method: 'PUT',
        body: JSON.stringify(newProfile),
        headers: {'content-type': 'application/json'
    }}).then(() => {
            dispatch({
                 type: 'update-profile',
                 profile: newProfile
             })
        })
    }