import { Router } from "express";
import { CommonCntrl } from "../controller/commoncntrl";
import { ResRegController } from "../controller/resregController";

const router = Router();
const cmnCntrl = new CommonCntrl();
const ResRegCntrl = new ResRegController();

router.post('/insertRegistration', async (req: any, res) => {
    try{
        if (cmnCntrl.getISDBConnected()){
            console.log(req.body);
            let result = await ResRegCntrl.insertRegistration(req.body);
            if (result?.success) res.status(200).json(result);
            else res.status(400).json(result);
            console.log("Done");
        }

        else{
            res.status(400).json({success:false, message: "DB Connection failure, try after some time"});
            console.log("Not done");
        }
    }

    catch(err: any){
        res.json({success: false, error: true, message: err.stack});
        console.log("Resreg catch Error");
    }

})

export default router;