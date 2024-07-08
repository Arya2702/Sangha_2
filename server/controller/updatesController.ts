import { CommonCntrl } from "./commoncntrl";
import { UpdatesDBQry } from "../model/updates_db";

const cmncntrl = new CommonCntrl();
const UpdatesQry = new UpdatesDBQry();

export class UpdatesController{
    constructor() {}

    async getUpdateDetails(){
        console.log('Inside updates controller');
        let result = await UpdatesQry.getUpdateDetails();
        console.log(result);

        if(result?.success){
            return { success: true, rowcount: result.rowcount, rows: JSON.stringify(result.rows) };
        }

        else{
            if (result?.connection_error) cmncntrl.getISDBConnected();
            return { success: true, message: result?.message };
        }
    }

    async insertUpdateDetails(param: any){
        console.log("Inside update maintenance controller");
        let result = await UpdatesQry.insertUpdateDetails(param);
        if (result?.success){ 
            return {success: true, rowcount: result?.rowcount, rows: result?.rows};
        }

        else if (result?.connection_error){
            cmncntrl.getISDBConnected();
            return {success: true, message: result?.message};
        }

    }
}