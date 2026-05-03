import { Router } from "express";
const route = Router()

import vehicleRoute from "./vehicle.js";
route.use("/vehicle", vehicleRoute)

import commandRoute from "./command.js";
route.use("/command",commandRoute )

import sloteRoute from "./slot.js";
route.use("/slot", sloteRoute)

export default route