import { CommonCntrl } from "./commoncntrl";
import { ResidentDBQry } from "../model/resident_db";

const cmncntrl = new CommonCntrl();
const ResidentQry = new ResidentDBQry();

export class ResidentController{
    constructor() {}

    async getResidentDetails(){
        let result = await ResidentQry.getResidentDetails();
        if(result?.success){
            return { success: true, rowcount: result.rowcount, rows: JSON.stringify(result.rows)};
        }

        else{
            if (result?.connection_error) cmncntrl.getISDBConnected();
            return { success: true, message: result?.message };
        }
    }
}