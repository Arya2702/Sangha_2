import { Router } from "express";
import { CommonCntrl } from "../controller/commoncntrl";
import { RecurringPayController } from "../controller/recurringpayController";

const router = Router();
const commoncntrl = new CommonCntrl();
const RecurringPayCntrl = new RecurringPayController();

router.get('/getRecurringPayDetails', async(req: any, res) => {
    try{
        if (commoncntrl.getISDBConnected()){
            let result = await RecurringPayCntrl.getRecurringPayDetails();
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

router.post('/insertRecurringPayDetails', async(req: any, res) => {
    try{
        if (commoncntrl.getISDBConnected()){
            let result = await RecurringPayCntrl.insertRecurringPayDetails(req.body);
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

export default router;