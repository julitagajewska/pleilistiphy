const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express()

app.use("/src", express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/public/css'));


// app.use("/src", express.static(path.resolve("./", "src")));

// app.get("/src", (req, res) => {
//     res.sendFile(path.join(__dirname, '/src/scripts/test.js'));
// })

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/landing.html'));
})

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

// Authentication
let request = require('request');
var access_token;

dotenv.config();

var spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

var generateRandomString = function (length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

app.get('/login', (req, res) => {

    var scope = "streaming \
               user-read-email \
               user-read-private \
               user-library-read"

    var state = generateRandomString(16);

    var auth_query_parameters = new URLSearchParams({
        response_type: "code",
        client_id: spotify_client_id,
        scope: scope,
        redirect_uri: "http://localhost:8888/callback",
        state: state
    })

    res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
})

app.get('/callback', (req, res) => {

    var code = req.query.code;

    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code: code,
            redirect_uri: "http://localhost:8888/callback",
            grant_type: 'authorization_code'
        },
        headers: {
            'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        json: true
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            access_token = body.access_token;
            res.redirect('/home')
        }
    });
})

app.get('/auth/token', (req, res) => {
    res.json(
        {
            access_token: access_token
        })
})

app.listen(process.env.PORT || 3000, () => console.log("Server running ..."));