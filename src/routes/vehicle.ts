import { Router } from "express";
const route = Router()

import vehicleController from "../controllers/vehicle.js";

route.post("/", vehicleController.create)

export default route
