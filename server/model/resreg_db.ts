import { fnDbQuery } from "../config/psqlAPM";

export class ResRegDBQry{
    constructor() { }

    async insertRegistration(param: any){

                
        const insertQuery = `INSERT INTO resreg(firstname, lastname, typeofres, yearofmovingin, houseno, email, password)
                            VALUES($1, $2, $3, $4, $5, $6, $7);`;
        const queryParam = [param.firstname, param.lastname, param.typeofres, param.yearofmovingin, param.houseno, param.email, param.password];

        return fnDbQuery("addRegDetails", insertQuery, queryParam);
    }
}