import { fnDbQuery } from "../config/psqlAPM";

export class NonRecurringPayQry{
    constructor() {}

    async getNonRecurringPayDetails(){
        const getRecurQuery = 'select*from building_workers_nonrecur';
        return fnDbQuery('getNonRecurringPayDetails', getRecurQuery, []); 
    }

    async insertNonRecurringPayDetails(param: any){
        const insertNonRecurQuery = `INSERT INTO building_workers_nonrecur(name, designation, phoneno, work_done, amt_paid, work_done_date) 
                                    VALUES ($1, $2, $3, $4, $5, $6)`;
        const qryParam = [param.name, param.designation, param.phoneno, param.work_done, param.amt_paid, param.work_done_date];
        return fnDbQuery('insertNonRecurringDetails', insertNonRecurQuery, qryParam); 
                                
    }
}