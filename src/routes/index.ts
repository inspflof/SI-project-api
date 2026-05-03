import { Router } from "express";
const route = Router()

import vehicleRoute from "./vehicle.js";

route.use("/vehicle", vehicleRoute)

export default route