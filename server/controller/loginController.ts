import { loginDBQry } from "../model/login_db";
import { CommonCntrl } from "./commoncntrl";

const loginDB = new loginDBQry();
const cmnCntrl = new CommonCntrl();

export class loginController{
    constructor() { }

    async login(param: any){
        console.log("inside login controller");
        let result = await loginDB.login(param.email);
        if(result?.success && result?.rowcount && result?.rowcount > 0){
            let res = result.rows[0];
            let pwd = param.password;
            if (res.password == pwd){
                return { success: true, rows: JSON.stringify([{user_id: res.id}])};
            }

            else{
                return { success: false, message: 'Invalid user/password' };
            }
        }
        
        else{
            return { success: false, message: 'Invalid user/password' };
        }
    }
}