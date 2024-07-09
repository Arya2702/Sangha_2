import { CommonCntrl } from "./commoncntrl";
import { RecurringPayQry } from "../model/recurringpay_db";

const cmncntrl = new CommonCntrl();
const RecurringQry = new RecurringPayQry();

export class RecurringPayController{
    constructor() {}

    async getRecurringPayDetails(){
        let result = await RecurringQry.getRecurringPayDetails();
        if(result?.success){
            return { success: true, rowcount: result.rowcount, rows: JSON.stringify(result.rows)};
        }

        else{
            if (result?.connection_error) cmncntrl.getISDBConnected();
            return { success: true, message: result?.message };
        }

    }

    async insertRecurringPayDetails(param: any){
        let result = await RecurringQry.insertRecurringPayDetails(param);
        if (result?.success){ 
            return {success: true, rowcount: result?.rowcount, rows: result?.rows};
        }

        else if (result?.connection_error){
            cmncntrl.getISDBConnected();
            return {success: true, message: result?.message};
        }


    }
}