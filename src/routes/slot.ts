import { Router } from "express";
const route = Router()

import slotController from "../controllers/slot.js";
route.get("/", slotController.getEmpty)

export default route