import { Router } from "express";
import { CommonCntrl } from "../controller/commoncntrl";
import { ComplaintRegController } from "../controller/complaintregController";

const router = Router();
const commoncntrl = new CommonCntrl();
const ComplaintRegCntrl = new ComplaintRegController();

router.post('/complaintreg', async (req: any, res) => {
    try{
        if (commoncntrl.getISDBConnected()){
            console.log(req.body);
            let result = await ComplaintRegCntrl.complaintreg(req.body);
            if (result?.success) res.status(200).json(result);
            else res.status(400).json(result);
        }

        else{
            res.status(400).json({success:false, message: "DB Connection failure, try after some time"});
            console.log("Not done");
        }
    }

    catch(err: any){
        res.json({success: false, error: true, message: err.stack});
        console.log("Rescheck catch Error");
    }
})

export default router;