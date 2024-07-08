import { Router } from "express";
import { CommonCntrl } from "../controller/commoncntrl";
import { NonRecurringPayController } from "../controller/nonrecurringpayController";

const router = Router();
const commoncntrl = new CommonCntrl();
const NonRecurringPayCntrl = new NonRecurringPayController();

router.get('/getNonRecurringPayDetails', async(req: any, res) => {
    try{
    if (commoncntrl.getISDBConnected()){
        let result = await NonRecurringPayCntrl.getNonRecurringPayDetails();
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

router.post('/insertNonRecurringPayDetails', async(req: any, res) => {
    try{
        if (commoncntrl.getISDBConnected()){
            let result = await NonRecurringPayCntrl.insertNonRecurringPayDetails(req.body);
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