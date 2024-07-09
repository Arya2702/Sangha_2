import { fnDbQuery } from "../config/psqlAPM";

export class commonDBQry{
    constructor() {}

    async checkDB(){
        let qryText = 'select now()';
        return fnDbQuery('checkDB', qryText);
    }
}