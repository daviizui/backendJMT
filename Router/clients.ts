import { Router } from "express"
import clientsController from "../Controller/clientsController"

const router = Router();


router.get('/', clientsController.index)

router.get('/create', clientsController.create)
router.post('/create', clientsController.store)

export default router