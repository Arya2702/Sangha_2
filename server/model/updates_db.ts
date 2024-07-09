import { fnDbQuery } from "../config/psqlAPM";

export class UpdatesDBQry{
    constructor(){ }

    getUpdateDetails(){
        const updateQuery = 'select*from updates order by id desc';
        return fnDbQuery('getUpdateDetails', updateQuery, []);
    }

    insertUpdateDetails(param: any){
        const insertUpdateQuery = 'insert into updates (date, update) values ($1, $2)';
        const qryParam = [param.date, param.update];
        return fnDbQuery('insertUpdateDetails', insertUpdateQuery, qryParam);
    }
}