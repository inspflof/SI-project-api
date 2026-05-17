import { Request, Response } from "express"
import commandQueries from "../services/db/queries/command.js"
import slotQueries from "../services/db/queries/slot.js"
import vehicleQueries from "../services/db/queries/vehicle.js"


const command = {
    async create(req: Request, res: Response) {
        const { type, vehicleId } = req.body

        try {
            if(type === "PARK") {
                const slot = await slotQueries.getEmpty()
                if(!slot) {
                    throw new Error("Il n'y a plus de place disponible")
                }
                const command = await commandQueries.create(type, vehicleId, slot.id)
                return res.status(200).json(command)
            }

            if(type === "RETRIEVE"){
                const vehicle = await vehicleQueries.getById(vehicleId)

                if(!vehicle || !vehicle.slot) {
                    throw new Error("Vehicle or slot unknown")
                }

                const command = await commandQueries.create(type, vehicleId, vehicle?.slot?.id)
                return res.status(200).json(command)
            }

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
    },

    async getLastPending(req: Request, res: Response) {
        try {
            const command = await commandQueries.getLastPending()
            res.status(200).json(command)
        } catch (err) {
            if(err instanceof Error) {
                return res.status(500).json({ message: err.message })
            }
            return res.status(500).json({ message: "Unknown error" })
        }
    },

    async changeStatus(req: Request, res: Response) {
        const { commandId } = req.params
        const { status } = req.body

        try {
            const command = await commandQueries.getById(Number(commandId))

            if(command?.type === "RETRIEVE" && status === "DONE") {
                const slot = await slotQueries.edit(command.slot_id)
            }

            const newCommand = await commandQueries.changeStatus(Number(commandId), status)
            res.status(200).json(newCommand)
        } catch (err) {
            if(err instanceof Error) {
                return res.status(500).json({ message: err.message })
            }
            return res.status(500).json({ message: "Unknown error" })
        }
    },
}

export default command