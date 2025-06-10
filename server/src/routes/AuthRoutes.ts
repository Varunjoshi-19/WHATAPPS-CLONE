 import { Router } from "express";
import { CheckUser, onBoardUser} from "../controllers/AuthController";

 const router = Router();


router.post("/check-user" , CheckUser);
router.post("/onboard-user" , onBoardUser);




 export default router;