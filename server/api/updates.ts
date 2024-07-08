import { CommonCntrl } from "../controller/commoncntrl";
import { UpdatesController } from "../controller/updatesController";
import { Router } from "express";

const router = Router();
const UpdatesCntrl = new UpdatesController();
const commoncntrl = new CommonCntrl();

router.get('/getUpdateDetails', async(req: any, res) => {
    try{
        if (commoncntrl.getISDBConnected()){
            let result = await UpdatesCntrl.getUpdateDetails();
            if (result?.success) res.status(200).json(result);
            else res.status(400).json(result);
        }

        else{
            res.status(501).json({ success: false, message: 'DB connection failure, try after some time! '});
        }
    }

    catch(err: any){
        res.json( { success: false, error: true, message: err.stack });
    }
})

router.post('/insertUpdateDetails', async(req: any, res) => {
    try{
        if (commoncntrl.getISDBConnected()){
            console.log(req.body);
            let result = await UpdatesCntrl.insertUpdateDetails(req.body);
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
        console.log("update maintenance catch Error");
    }
})

export default router;