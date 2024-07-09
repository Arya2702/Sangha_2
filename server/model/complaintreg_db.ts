import { fnDbQuery } from "../config/psqlAPM";

export class ComplaintRegDBQry{
    constructor() { }

    async complaintreg(param: any){
        
        const checkQuery = "INSERT INTO complaint(name, typeofcomplaint, description) VALUES ($1, $2, $3)";
        const queryParam = [param.residentname, param.typeofcomplaint, param.description];
        return fnDbQuery('complaintreg', checkQuery, queryParam);
    }
}