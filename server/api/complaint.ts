import { ComplaintController } from "../controller/complaintController";
import { CommonCntrl } from "../controller/commoncntrl";
import { Router } from "express";

const router = Router();
const commoncntrl = new CommonCntrl();
const ComplaintCntrl = new ComplaintController();

router.get('/getComplaintDetails', async (req: any, res) => {
    try{
        if (commoncntrl.getISDBConnected()){
            let result = await ComplaintCntrl.getComplaintDetails();
            if (result?.success) return res.status(200).json(result);
            else return res.status(400).json(result);
        }

        else {
            res.status(501).json( { success: false, message: 'DB connection failure, try after some time! '});
        }
    }

    catch(err: any){
        res.json( { success: false, error: true, message: err.stack } );
    }
})

router.post('/updateComplaintDetails', async (req: any, res) => {
    try{
        if (commoncntrl.getISDBConnected()){
            console.log('Request sending');
            let result = await ComplaintCntrl.updateComplaintDetails(req.body);
            if (result?.success) return res.status(200).json(result);
            else return res.status(400).json(result);
        }

        else {
            res.status(501).json( { success: false, message: 'DB connection failure, try after some time! '});
        }
    }

    catch(err: any){
        res.json( { success: false, error: true, message: err.stack } );
    }

})

export default router;