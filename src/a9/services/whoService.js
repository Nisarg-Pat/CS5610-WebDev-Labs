const WHO_API = process.env.NODE_ENV === 'development'
                  ? "http://localhost:4000/rest/who"
                  : "https://web-dev-node-nisargpat.herokuapp.com/api/tweets";

export const fetchAllWho = () => {
    return fetch(WHO_API).then(response => response.json());
}