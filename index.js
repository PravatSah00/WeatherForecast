const http = require("http");
const color = require("colors");
const fs = require("fs");
const axios = require("axios");

let Html = fs.readFileSync("frontEnd/index.html",'utf-8');
function setHtmlData(html,data){
    let tempC = data.main.temp - 273.15;
    let tempF = (tempC*9/5) + 32;
    let tempMin = data.main.temp_min - 273.15;
    let tempMax = data.main.temp_max - 273.15;
    html = html.replace("{%location%}",data.name + " " + data.sys.country);
    html = html.replace("{%status%}",data.weather[0].description)
    html = html.replace("{%tempC%}",tempC.toFixed(1));
    html = html.replace("{%tempF%}",tempF.toFixed(1));
    html = html.replace("{%tempMin%}",tempMin.toFixed(1));
    html = html.replace("{%tempMax%}",tempMax.toFixed(1));
    return html;
}

const server = http.createServer();
server.listen(8000,"localhost");

server.on("request",(req,res)=>{
    console.log(req.url);
    if(req.url == "/"){
        let city = "Kolkata";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9c8fde85d861447cbf0e2d828cd0aa4`;
        axios.get(url).then((ResData)=>{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(setHtmlData(Html,ResData.data));
            }).catch((err)=>{
                console.log(err);
            });
    }
    if(req.url == "/style.css"){
        const readableStream2 = fs.createReadStream("frontEnd/style.css");
        res.writeHead(200,{"Content-Type":"text/css"});
        readableStream2.pipe(res);
    }
    if(req.url == "/script.js"){
        const readableStream3 = fs.createReadStream("frontEnd/script.js");
        res.writeHead(200,{"Content-Type":"text/js"});
        readableStream3.pipe(res);
    }
    if(req.url == "/image/sun-cloud.png"){
        const readableStreame4 = fs.createReadStream("frontEnd/Image/sun-cloud.png");
        res.writeHead(200,{"Content-type":"image/png"});
        readableStreame4.pipe(res);
    }
    if(req.url == "/image/wave.png"){
        const readableStream5 = fs.createReadStream("frontEnd/Image/wave.png");
        res.writeHead(200,{"Content-Type":"image/png"});
        readableStream5.pipe(res);
    }
});