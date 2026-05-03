import { Router } from "express";
const route = Router()

import commandController from "../controllers/command.js";

route.post("/", commandController.create)
route.get("/", commandController.getAll)

route.get("/:commandId", commandController.getById)

export default route