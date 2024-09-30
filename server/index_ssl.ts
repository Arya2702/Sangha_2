const express = require('express');
const cors = require('cors');
import mountRoutes from './api';
import path from 'path';

var httpPort = process.env.sangha_httpPort;
var https = require('https');

const app = express();

app.use(express.json({limit:'100mb'}));

app.use(cors({
    origin:['http://localhost:4200']
}));


app.options('*', cors());

app.use(express.static(path.join(__dirname, '../../frontend/dist/browser')));

mountRoutes(app);

app.get('*', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist/browser/index.html'))
});

app.use(function(req: any,res: any,next: any){

	// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); // Allow requests from Angular app
    // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow necessary methods
    // res.setHeader('Access-Control-Allow-Credentials', 'true'); // If you need to send cookies or authorization headers

    // // Security Headers
    // res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    // res.setHeader("Pragma", "no-cache");
    // res.setHeader("Content-Security-Policy", "frame-ancestors 'self';");
    // res.setHeader('X-Frame-Options', 'DENY');
    // res.setHeader('X-Content-Type-Options', "nosniff");
    // res.setHeader('X-XSS-Protection', "1; mode=block");
    // res.setHeader('Referrer-Policy', 'strict-origin');

    // // Handle preflight requests for CORS
    // if (req.method === 'OPTIONS') {
    //     return res.sendStatus(200); // Options request should return OK status
    // }
    
    // next();

    res.setHeader('Access-Control-Allow-Headers', 'Orgin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Methods', ['GET','POST']);
	res.setHeader("Access-Control-Allow-Credentials", "false");
	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
	res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
	res.setHeader("Content-Security-Policy", "frame-ancestors 'self';");
	res.setHeader('X-Frame-Options', 'DENY');
	res.setHeader('X-Content-Type-Options', "nosniff");
	res.setHeader('X-XSS-Protection', "1; mode=block");
    res.setHeader('Referrer-Policy', 'strict-origin');
    
	next();
})

try{
    https.createServer(app).listen(httpPort, process.env.sangha_httpsip, () => console.log('Sangha portal Server listening on port '+httpPort+'!'));
}

catch{
    console.log("Server not created");
}