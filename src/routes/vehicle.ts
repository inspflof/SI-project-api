import { Router } from "express";
const route = Router()

import vehicleController from "../controllers/vehicle.js";

route.post("/", vehicleController.create)
route.get("/", vehicleController.getAll)

route.get("/:vehicleId", vehicleController.getById)

export default route
