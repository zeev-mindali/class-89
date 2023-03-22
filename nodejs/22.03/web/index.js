const banner = require("./banner");
const http = require("http");

console.log(banner.getBanner());
console.log("server ip  : 10.103.50.223");
console.log("server port: 4578");

//web server, code 200 OK, text, port , msg, req/res, tcp/ip
http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text-plain",
    });
    response.write("Matan and Hila, sitting on a tree, ........\n");
    response.end("I am a server at ip 10.103.50.223, please kill Nadav");
  })
  .listen(4578);
