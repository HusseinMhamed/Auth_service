import { Router } from "express";
import verifyJWT from '../middleware/verifyJWT.mjs'
import getAllUsers from "../controllers/userController.mjs";
let router = Router();

router.use(verifyJWT)
router.route('/').get(getAllUsers)

export default router;