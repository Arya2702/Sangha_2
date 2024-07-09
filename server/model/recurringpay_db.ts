import { fnDbQuery } from "../config/psqlAPM";

export class RecurringPayQry{
    constructor() {}

    async getRecurringPayDetails(){
        const getRecurQuery = 'select*from building_workers_recur';
        return fnDbQuery('getRecurringPayDetails', getRecurQuery, []); 
    }

    async insertRecurringPayDetails(param: any){
        const insertRecurQuery = `INSERT INTO building_workers_recur(name, designation, phoneno, work_done, monthly_payment, paid_date) 
                                    VALUES ($1, $2, $3, $4, $5, $6)`;
        const qryParam = [param.name, param.designation, param.phoneno, param.work_done, param.monthly_payment, param.paid_date];
        return fnDbQuery('insertRecurringDetails', insertRecurQuery, qryParam); 
                                
    }
}