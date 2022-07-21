const request = require('request');


function getAllTracks(artistId) {
    const client_id = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;
    const b = Buffer.from(`${client_id}:${client_secret}`);
    let output;

    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + b.toString('base64')
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };

        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var reqOpts = {
                    headers: {
                        Authorization: 'Bearer ' + body.access_token,
                    },
                    method: 'GET',
                    url: `https://api.spotify.com/v1/artists/${artistId}/albums`,
                    json: false
                };

                request(reqOpts, processResponse);

                function processResponse(error, res, body) {
                    if (error) {
                        return console.log(error);
                    } else {
                        console.log(body);
                        // output = body;
                    }
                }

            }
        });


    return output;
}




module.exports = getAllTracks;

// function getArtist(artistId) {
//     const client_id = process.env.CLIENT_ID;
//     const client_secret = process.env.CLIENT_SECRET;
//     const b = Buffer.from(`${client_id}:${client_secret}`);
//
//     const authOptions = {
//         url: 'https://accounts.spotify.com/api/token',
//         headers: {
//             'Authorization': 'Basic ' + b.toString('base64')
//         },
//         form: {
//             grant_type: 'client_credentials'
//         },
//         json: true
//     };
//
//     request.post(authOptions, function (error, response, body) {
//         if (!error && response.statusCode === 200) {
//             const reqOpts = {
//                 headers: {
//                     Authorization: 'Bearer ' + body.access_token,
//                 },
//                 method: 'GET',
//                 url: `https://api.spotify.com/v1/artists/${artistId}`,
//                 json: true
//             };
//
//             request(reqOpts, processAllTracksResponse);
//
//             function processAllTracksResponse(error, res, body) {
//                 if (error) {
//                     return console.log(error);
//                 } else if (body.error) {
//                     return console.log('SpotifyScraper error: ' + body.error.message);
//                 } else {
//                     console.log(body);
//                     return body;
//                 }
//             }
//         }
//     });
// }

// function getTopTracks() {
//     request.post(authOptions, function (error, response, body) {
//         if (!error && response.statusCode === 200) {
//             var reqOpts = {
//                 headers: {
//                     Authorization: 'Bearer ' + body.access_token,
//                 },
//                 method: 'GET',
//                 url: `https://api.spotify.com/v1/artists/${artistId}/getTopTracks?country=${country}`,
//                 json: true
//             };
//
//             request(reqOpts, processTracksResponse);
//
//             function processTracksResponse(error,res, body) {
//                 if (error) {
//                     return console.log(error);
//                 } else {
//                     console.log(body);
//                     // return body;
//                 }
//             }
//
//         }
//     });
// }

// function getRelatedArtists() {
//     request.post(authOptions, function (error, response, body) {
//         if (!error && response.statusCode === 200) {
//             var reqOpts = {
//                 headers: {
//                     Authorization: 'Bearer ' + body.access_token,
//                 },
//                 method: 'GET',
//                 url: `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
//                 json: true
//             };
//
//             request(reqOpts, processAllTracksResponse);
//
//             function processAllTracksResponse(error, res, body) {
//                 if (error) {
//                     return console.log(error);
//                 } else {
//                     return body;
//                 }
//             }
//
//         }
//     });
//}