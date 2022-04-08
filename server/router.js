import { Router } from "express";
import controllerPrice from './controllerPrice.js'

const router = Router()

router.post('/add-price', controllerPrice.addPrice)

export default router