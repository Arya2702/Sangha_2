import { CommonCntrl } from "./commoncntrl"; 
import { ResRegDBQry } from "../model/resreg_db";

const ResRegQuery = new ResRegDBQry();
const cmncntrl = new CommonCntrl();

export class ResRegController{
    constructor() { }

    async insertRegistration(param: any){
        console.log('inside registration controller');
        let result = await ResRegQuery.insertRegistration(param);
        if (result?.success){ 
            return {success: true, rowcount: result?.rowcount, rows: result?.rows};
        }

        else if (result?.connection_error){
            cmncntrl.getISDBConnected();
            return {success: true, message: result?.message};
        }
    }
}