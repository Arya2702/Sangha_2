const express = require('express');
const cors = require('cors');
import * as http from 'http';
import mountRoutes from './api';

var httpPort = 3001;

const app = express();

app.use(express.json({limit:'1mb'}))
app.use(cors({
    origin:['http://localhost:4200']
}))
app.options('*', cors())


mountRoutes(app);

try{
http.createServer(app).listen(httpPort, ()=>console.log("Node server listening on port" + httpPort + "!"));
}

catch{
    console.log("Server not created");
}