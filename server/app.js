const data = require('./data');
const http = require('http');
const qs = require('querystring');
const url = require('url');

const hostname = 'localhost';
const port = 8420;


function handleError(code, res) {
    res.statusCode = code;
    res.end(`{"error": "${http.STATUS_CODES[code]}"}`);
}

http.createServer(function (req, res) {
    if (req.method !== 'GET') {
        handleError(405, res);
    }

    const { pathname, query } = url.parse(req.url);

    if (pathname === '/search') {
        const { q } = qs.parse(query);

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);

        if (q) {
            const result = data.filter(
                product => product.isActive === 'true' &&
                    JSON.stringify(product).toLowerCase().includes(q.toLowerCase())
            )

            res.end(JSON.stringify(result))
        } else {
            res.end('Bad request');
        }

    }

    if (pathname === '/') {

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);

        res.end(JSON.stringify(data))
    }
}).listen(port);

console.log(`[Server running on ${hostname}:${port}]`);
