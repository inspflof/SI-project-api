import { Router } from "express";
const route = Router()

import commandController from "../controllers/command.js";

route.post("/", commandController.create)
route.get("/", commandController.getAll)

route.get("/todo", commandController.getLastPending)
route.get("/:commandId", commandController.getById)

route.put("/:commandId", commandController.changeStatus)

export default route