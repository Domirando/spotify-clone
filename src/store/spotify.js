export const  authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:3000/";
const clientId = "5ae94d4d7b484eb88367fe5b7de0a9ec";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
export const getTokenUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};
export const loginUrl = `${authEndPoint}?response_type=token&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&show_dialog=true`