const http = require("http");

http.createServer((req, res) => {
    console.log(res);
    console.log('bharath')
    res.write("<h1>Home Page!</h1>");
    res.end();
})
.listen(8080);  

