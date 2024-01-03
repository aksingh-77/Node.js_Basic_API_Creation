const http = require("http");
const data = require("./data")


/**Http modeule is used to create a server with its createServer method provide by it */
/**
 * createServer Method takes callback function as argumnet, and this callback function takes 
 * 2 argumnets as parametes i.e request and response
 * 
 * We return the data using methods provided for the response parameter
 */
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000)