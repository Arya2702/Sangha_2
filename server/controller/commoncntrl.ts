import { commonDBQry } from "../model/common_db";

const commonCntrl = new commonDBQry();
let isDBConnected = false;
let isDBCheckRunning = false;

export class CommonCntrl{
    constructor() {}

    async checkDB(){
        let result: any = await commonCntrl.checkDB();

        if (result.success){
            isDBConnected = true;
            isDBCheckRunning = false;
            console.log("DB Connected");
        }

        else if(result?.connection_error){
            isDBConnected = false;
            isDBCheckRunning = true;
            console.log("DB not connected, retry in 30 seconds");
            setTimeout(() => {
                this.checkDB();
            }, 30000);
        }

        else{
            isDBConnected = true;
            isDBCheckRunning = false;
            console.log("DB connected, query error");
        }
    }

    getISDBConnected(){
        if(!isDBCheckRunning && !isDBConnected) this.checkDB();
        return isDBConnected;
    }
}