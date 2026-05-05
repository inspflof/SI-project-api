import { Request, Response } from "express";
import slotQueries from "../services/db/queries/slot.js";

const slot = {
    async getEmpty(req: Request, res: Response) {
        try {
            const slot = await slotQueries.getEmpty()
            res.status(200).json(slot)
        } catch (err) {
            if(err instanceof Error) {
                return res.status(500).json({ message: err.message })
            }
            return res.status(500).json({ message: "Unknown error" })
        }
    },

    async editSlot(req: Request, res: Response) {
        const { slotId } = req.params
        const { vehicleId } = req.body ?? {}
        
        try {
            const slot = await slotQueries.edit(Number(slotId), vehicleId)
            res.status(200).json(slot)
        } catch (err) {
            if(err instanceof Error) {
                return res.status(500).json({ message: err.message })
            }
            return res.status(500).json({ message: "Unknown error" })
        }
    },

    async getAll(req: Request, res: Response) {
        try {
            const slot = await slotQueries.getAll()
            res.status(200).json(slot)
        } catch (err) {
            if(err instanceof Error) {
                return res.status(500).json({ message: err.message })
            }
            return res.status(500).json({ message: "Unknown error" })
        }
    }
}

export default slot