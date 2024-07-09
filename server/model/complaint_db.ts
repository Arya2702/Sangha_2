import { fnDbQuery } from "../config/psqlAPM";

export class ComplaintDBQry {
    constructor() {}

    async getComplaintDetails(){
        
        const compQuery = "select*from complaint order by id desc";
        return fnDbQuery('getComplaintDetails', compQuery, []); 
    }

    async updateComplaintStatus(param: any){
        const updateQuery = "update complaint set status='Closed' where id=($1)";
        const qryParam = [param.id];
        return fnDbQuery('updateComplaintStatus', updateQuery, qryParam);
    }
}