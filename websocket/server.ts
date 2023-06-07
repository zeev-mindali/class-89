//to which server we are going to connect
let wsURI = "ws://echo.websocket.org";
//create a new web socket connection to given url
let websocket = new WebSocket(wsURI);
//send message
websocket.send("Hello World !");
//what to do when we get a message
websocket.onmessage = function (evt) {
    console.log("event:\n", evt);
    console.log("event data:\n", evt.data);
}
//what to do when we get an error
websocket.onerror = function (evt) {
    console.log("event:\n", evt);
}
//what to do when web socket is opened
websocket.onopen = function (evt) {
    console.log("Web socket is opened");
    console.log("Event:\n", evt)
}
websocket.onclose = function (evt) {
    console.log("Web socket is closed");
    console.log("event:\n", evt);
}

//close the connection
websocket.close();



