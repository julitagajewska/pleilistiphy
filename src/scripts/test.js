import { getToken, getSavedTracks } from "/src/API/index.js";

getToken().then((response) => console.log(response));

console.log("MLEM")