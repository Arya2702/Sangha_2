import { fnDbQuery } from "../config/psqlAPM";

export class ResidentDBQry{
    constructor() {}

    async getResidentDetails(){
        const getQuery = 'select firstname, lastname, typeofres, houseno, email from resreg';

        return fnDbQuery('getResidentDetails', getQuery, []);

    }
}