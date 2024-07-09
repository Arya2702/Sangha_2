import { ComplaintDBQry } from "../model/complaint_db";
import { CommonCntrl } from "./commoncntrl";

const ComplaintQry = new ComplaintDBQry();
const cmncntrl = new CommonCntrl();

export class ComplaintController{

    constructor() {}

    async getComplaintDetails(){
        let result = await ComplaintQry.getComplaintDetails();
        if (result?.success){
            return { success: true, rowcount: result.rowcount, rows: JSON.stringify(result.rows) };
        }

        else{
            if (result?.connection_error) cmncntrl.getISDBConnected();
            return { success: true, message: result?.message };
        }
    }

    async updateComplaintDetails(param: any){
        console.log('inside update complaint controller');
        let result = await ComplaintQry.updateComplaintStatus(param);
        if (result?.success){
             return { success: true, rowcount: result.rowcount, rows: result.rows };
        }
        else{
            if(result?.connection_error) cmncntrl.getISDBConnected();
            return { success: true, message: result?.message };
        }
    }

}