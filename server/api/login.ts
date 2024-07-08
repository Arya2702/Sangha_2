import { Router } from "express";
import { CommonCntrl } from "../controller/commoncntrl";
import { loginController } from "../controller/loginController";

const router = Router();
const cmnCntrl = new CommonCntrl();
const loginCntrl = new loginController();

router.post('/login', async (req: any, res) => {
    try{
        if (cmnCntrl.getISDBConnected()){
            let result = await loginCntrl.login(req.body);
            if (result?.success) res.status(200).json(result);
            else res.status(400).json(result);
            console.log("Done");
        }

        else{
            res.status(501).json({success:false, message: "DB Connection failure, try after some time"});
            console.log("Not done");
        }
    }

    catch(err: any){
        res.json({success: false, error: true, message: err.stack});
        // console.log(err);
        console.log("login catch Error");
    }

})

export default router;