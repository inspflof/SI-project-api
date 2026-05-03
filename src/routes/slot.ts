import { Router } from "express";
const route = Router()

import slotController from "../controllers/slot.js";
route.get("/", slotController.getEmpty)

route.put("/:postId", slotController.editSlot)

export default route