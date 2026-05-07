import { prisma } from "../../../config/prisma.js"
import { CommandStatus, CommandType } from "../../../generated/prisma/enums.js"

const command = {
    async create(type: CommandType, vehicleId: string, slotId: number) {
        return await prisma.$transaction(async (tx) => {

            await tx.slot.update({
                where: {
                    id: slotId
                },
                data: {
                    is_occupied: true,
                    vehicle_id: vehicleId
                }
            })

            return await tx.command.create({
                data: {
                    status: "PENDING",
                    type,
                    vehicle_id: vehicleId,
                    slot_id: slotId
                },

                include: {
                    slot: true,
                    vehicle: true
                }
            })
        })
    },

    async getAll() {
        return await prisma.command.findMany()
    },

    async getById(id: number) {
        return await prisma.command.findUnique({
            where: { id }
        })
    },

    async getLastPending() {
        return await prisma.command.findFirst({
            where: {
                status: "PENDING"
            },
            orderBy: {
                created_at: "asc"
            }
        })
    },

    async changeStatus(commandId: number, status: CommandStatus) {
        return await prisma.command.update({
            where: { id: commandId},
            data: {
                status
            }
        })
    }
}

export default command