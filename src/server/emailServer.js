var axios = require('axios');
var http = require('http');
var url = require('url');
var fs = require('fs');

const accessTokenFileName = 'a_token';
const refreshTokenFileName = 'r_token';

function handler(req, res) {
    if (req.url.indexOf('/sendEmail') !== -1) {
        if (req.method === 'POST') {
            sendEmail(req, res);
        } else if (req.method === 'OPTIONS') {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.writeHead(200);
            res.end();
        } else {
            res.writeHead(404);
            res.end();
        }
    } else {
        res.writeHead(404);
        res.end();
    }
}

function sendEmail(req, res) {    
    const accessToken = fs.readFileSync(accessTokenFileName, {encoding: 'UTF-8'});
    const refreshToken = fs.readFileSync(refreshTokenFileName, {encoding: 'UTF-8'});

    req.on('data', function(chunk) {
        const body = JSON.parse(Buffer.concat([chunk]).toString());

        const rawMessage = Buffer.from(
            'From: jyaoma@gmail.com\r\n' +
            'To: graciella.clarissa@gmail.com\r\n' +
            `Subject: [Pawstay Request] ${body.subject}\r\n\r\n` +
        
            `${body.owner} <${body.email}> has requested that you watch ${body.dog}.\r\n\r\n` +
            `"${body.body}"`)
            .toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

        console.log('making the call with body: ' + rawMessage);
        axios
            .post('https://www.googleapis.com/gmail/v1/users/me/messages/send', {raw: rawMessage}, {headers: {
                'Authorization': 'Bearer ' + accessToken
            }})
            .then(function () {
                console.log('call succeeded');
                res.writeHead(200);
                res.end();
            }, function (err) {
                console.log('call failed');
                if (err.response.status === 401) {
                    console.warn('needs token refresh');
                    axios
                        .post(`https://www.googleapis.com/oauth2/v4/token?client_secret=P1onDVASYtrTiuPq8841yaOK&grant_type=refresh_token&refresh_token=${refreshToken}&client_id=309874968010-l4r15t3ln4vva7nb1c1v492vvmvipu0h.apps.googleusercontent.com`)
                        .then(function(response) {
                            console.log('token refresh succeeded: ' + JSON.stringify(response.data));
                            fs.writeFileSync(accessTokenFileName, response.data.access_token, {encoding: 'UTF-8'});

                            axios
                                .post('https://www.googleapis.com/gmail/v1/users/me/messages/send', {raw: rawMessage}, {headers: {
                                    'Authorization': 'Bearer ' + response.data.access_token
                                }})
                                .then(function () {
                                    console.log('call succeeded');
                                    res.writeHead(200);
                                    res.end();
                                }, function (err) {
                                    res.writeHead(err.response.status);
                                    res.writeHead(err.response.data);
                                    res.end();
                                });
                        }, function(error) {
                            console.log('token refresh failed');
                            res.writeHead(500);
                            res.end();
                        })
                } else {
                    console.log('failed due to other error: ' + JSON.stringify(err.response.data));
                    res.writeHead(err.response.status);
                    res.write(err.response.data);
                    res.end();
                }
            });
    });
}

http.createServer(handler).listen(3001, function(err) {
    if (err) {
        console.log('Error starting http server');
    } else {
        console.log('Server listening on port 3001');
    }
});