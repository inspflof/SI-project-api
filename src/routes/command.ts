import { Router } from "express";
const route = Router()

import commandController from "../controllers/command.js";

route.use("/", commandController.create)

export default route