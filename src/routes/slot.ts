import { Router } from "express";
const route = Router()

import slotController from "../controllers/slot.js";
route.get("/", slotController.getAll)
route.get("/empty", slotController.getEmpty)

route.put("/:slotId", slotController.editSlot)

export default route