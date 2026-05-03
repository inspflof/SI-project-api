import { Request, Response } from "express";
import vehicleQueries from "../services/db/queries/vehicle.js";


const vehicle = {
    async create(req: Request, res: Response) {
        const { immatriculation } = req.body
        try {
            const vehicle = await vehicleQueries.create(immatriculation)
            return res.status(200).json(vehicle)
        } catch (err) {
            if(err instanceof Error) {
                return res.status(500).json({ message: err.message })
            }
            return res.status(500).json({ message: "Unknown error" })
        }
    },

    async getAll(req: Request, res: Response) {
        try {
            const vehicles = await vehicleQueries.getAll()
            return res.status(200).json(vehicles)
        } catch (err) {
            if(err instanceof Error) {
                return res.status(500).json({ message: err.message })
            }
            return res.status(500).json({ message: "Unknown error" })
        }
    },

    async getById(req: Request, res: Response) {
        const { vehicleId } = req.params
        try {
            if(typeof vehicleId === "string") {
                const vehicle = await vehicleQueries.getById(vehicleId)
                return res.status(200).json(vehicle)
            }
            throw new Error("Necessary id")
        } catch (err) {
            if(err instanceof Error) {
                return res.status(500).json({ message: err.message })
            }
            return res.status(500).json({ message: "Unknown error" })
        }
    }
}

export default vehicle