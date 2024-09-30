import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import fs from 'fs';
import mountRoutes from './api';
import path from 'path';
import https from 'https';

const app = express();
const httpPort: number = parseInt(process.env.sangha_httpsPort as string, 10) || 3000; // Default port if not set
const httpsIp: string = process.env.sangha_httpsip || '127.0.0.1'; // Default IP if not set

// Middleware setup
app.use(express.json({ limit: '100mb' }));
app.use(cors({ origin: ['http://localhost:4200'] }));
app.options('*', cors());
app.use(express.static(path.join(__dirname, '../../frontend/dist/frontend')));
mountRoutes(app);

app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist/frontend/index.html'));
});

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Credentials', 'false');
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Content-Security-Policy", "frame-ancestors 'self';");
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', "nosniff");
    res.setHeader('X-XSS-Protection', "1; mode=block");
    res.setHeader('Referrer-Policy', 'strict-origin');
    next();
});

// Ensure that the environment variables are set
const sslKeyPath: string = process.env.sangha_sslkey as string;
const sslCertPath: string = process.env.sangha_sslcert as string;
const sslCaPath: string = process.env.sangha_sslca as string;

if (!sslKeyPath || !sslCertPath || !sslCaPath) {
    throw new Error("SSL configuration files are not set in environment variables.");
}

try {
    const key = fs.readFileSync(sslKeyPath);
    const cert = fs.readFileSync(sslCertPath);
    const ca = fs.readFileSync(sslCaPath);
    const options = {
        key: key,
        cert: cert,
        ca: ca,
        ciphers: [
            "ECDHE-RSA-AES256-GCM-SHA384:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA:HIGH:!AES128"
        ].join(':'),
    };

    https.createServer(options, app).listen(httpPort, httpsIp, () => {
        console.log('Sangha portal Server listening on port ' + httpPort + '!'); // Fixed unterminated string
    });
} catch (error: any) {
    console.error("Server not created:", error.message);
}
