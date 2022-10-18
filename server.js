const http = require("http");

const headers = {
    "Access-Control-Allow-Origin": "*" /* @dev First, read about security */,
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    /** add other headers as per requirement */
};

http.createServer((request, response) => {
    console.log("server work");
    let body = "";
    request.on("data", (chunk) => {
        body += chunk.toString();
    });
    request.on("end", () => {
        console.log(body);
        response.writeHead(200, headers);
        response.end(body);
    });
}).listen(3000);
