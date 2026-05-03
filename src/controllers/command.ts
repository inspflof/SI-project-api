import { Request, Response } from "express"
import commandQueries from "../services/db/queries/command.js"


const command = {
    async create(req: Request, res: Response) {
        const { type, vehicleId } = req.body

        try {
            const command = await commandQueries.create(type, vehicleId)
            res.status(200).json(command)
        } catch (err) {
            if(err instanceof Error) {
                return res.status(500).json({ message: err.message })
            }
            return res.status(500).json({ message: "Unknown error" })
        }
    },

    async getAll(req: Request, res: Response) {
        try {
            const commands = await commandQueries.getAll()
            res.status(200).json(commands)
        } catch (err) {
            if(err instanceof Error) {
                return res.status(500).json({ message: err.message })
            }
            return res.status(500).json({ message: "Unknown error" })
        }
    },

    async getById(req: Request, res: Response) {
        const { commandId } = req.params

        try {
            const command = await commandQueries.getById(Number(commandId))
            res.status(200).json(command)
        } catch (err) {
            if(err instanceof Error) {
                return res.status(500).json({ message: err.message })
            }
            return res.status(500).json({ message: "Unknown error" })
        }
    }
}

export default command