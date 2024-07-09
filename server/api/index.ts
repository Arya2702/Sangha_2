import { Express } from "express";
import { CommonCntrl } from "../controller/commoncntrl";
import resreg from './resreg';
import login from './login';
import complaintreg from './complaintreg';
import resident from './resident';
import complaint from './complaint';
import updates from './updates';
import recurringpay from './recurringpay';
import nonrecurringpay from './nonrecurringpay';

const cmnCntrl = new CommonCntrl();
console.log("API router loaded");

initialize();
async function initialize(){
    cmnCntrl.checkDB();
}

export default function mountRoutes(app: Express): void {
    app.use('/resreg', resreg);
    app.use('/login', login);
    app.use('/complaintreg', complaintreg);
    app.use('/resident', resident);
    app.use('/complaint', complaint);
    app.use('/updates', updates);
    app.use('/recurringpay', recurringpay);
    app.use('/nonrecurringpay', nonrecurringpay);
}
