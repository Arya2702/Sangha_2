import { CommonCntrl } from "./commoncntrl";
import { NonRecurringPayQry } from "../model/nonrecurringpay_db";

const cmncntrl = new CommonCntrl();
const NonRecurringQry = new NonRecurringPayQry();

export class NonRecurringPayController{

    constructor() {}

    async getNonRecurringPayDetails(){
        let result = await NonRecurringQry.getNonRecurringPayDetails();
        if(result?.success){
            return { success: true, rowcount: result.rowcount, rows: JSON.stringify(result.rows)};
        }

        else{
            if (result?.connection_error) cmncntrl.getISDBConnected();
            return { success: true, message: result?.message };
        }

    }

    async insertNonRecurringPayDetails(param: any){
        let result = await NonRecurringQry.insertNonRecurringPayDetails(param);
        if (result?.success){ 
            return {success: true, rowcount: result?.rowcount, rows: result?.rows};
        }

        else if (result?.connection_error){
            cmncntrl.getISDBConnected();
            return {success: true, message: result?.message};
        }

    }
}