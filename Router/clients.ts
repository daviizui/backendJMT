import { Router } from "express"
import clientsController from "../Controller/clientsController"

const router = Router();


router.get('/', clientsController.index)
router.get('/:id', clientsController.show)

router.get('/create', clientsController.create)
router.post('/create', clientsController.store)

router.get('/edit/:id',clientsController.edit)

export default router