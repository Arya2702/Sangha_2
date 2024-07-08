import { ComplaintRegDBQry } from "../model/complaintreg_db";
import { CommonCntrl } from "./commoncntrl";

const ComplaintRegQuery = new ComplaintRegDBQry();
const cmnCntrl = new CommonCntrl();

export class ComplaintRegController{
    constructor() {}

    async complaintreg(param: any){
        console.log('Inside rescheck controller');
        let result = await ComplaintRegQuery.complaintreg(param);
        console.log(result);
        if (result?.success){
            return {success: true, rows: result.rows, rowcount: result.rowcount};
        }

        else {
            return {success: false, message: 'Could not enter details'};
        }
    }
}