import { Router } from "express";
import { CommonCntrl } from "../controller/commoncntrl";
import { ResidentController } from "../controller/residentController";

const router = Router();
const commoncntrl = new CommonCntrl();
const ResidentCntrl = new ResidentController();

router.get('/getResidentDetails', async (req: any, res) => {
    try{
        if (commoncntrl.getISDBConnected()){
            let result = await ResidentCntrl.getResidentDetails();
            if(result.success) res.status(200).json(result);
            else res.status(400).json(result);
            }

        else {
            res.status(501).json( { success: false, message: 'DB connection failure, try after some time! '});
        }
    }

    catch(err: any){
        res.json( { success: false, error: true, message: err.stack });
    }

})

export default router;