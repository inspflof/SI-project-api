import { Request, Response } from "express";
import vehicleQueries from "../services/db/queries/vehicle.js";


const vehicle = {
    async create(req: Request, res: Response) {
        const { immatriculation } = req.body
        try {
            const vehicle = await vehicleQueries.create(immatriculation)
            console.log(vehicle)
            return res.status(200).json(vehicle)
        } catch (err) {
            if(err instanceof Error) {
                return res.status(500).json({ message: err.message })
            }
            return res.status(500).json({ message: "Unknown error" })
        }
    }
}

export default vehicle