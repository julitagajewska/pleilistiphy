// Server
export async function getToken() {
    const response = await fetch('/auth/token');
    const json = await response.json();
    const token = json.access_token;
    return token;
}


// Spotify API
export async function getSavedTracks(accessToken) {
    let response = await fetch(`https://api.spotify.com/v1/me/tracks`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });

    let responseJson = await response.json();

    return responseJson;
}

// Get User

// Get user's saved tracks

// Get user's playlists

// Get playlist's tracks

// Get track's features

// Get tracks' features