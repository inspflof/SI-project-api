import { prisma } from "../../../config/prisma.js"
import { CommandType } from "../../../generated/prisma/enums.js"

const command = {
    async create(type: CommandType, vehicleId: string) {
        return await prisma.command.create({
            data: {
                status: "PENDING",
                type,
                vehicle_id: vehicleId
            }
        })
    },

    async getAll() {
        return await prisma.command.findMany()
    },

    async getById(id: number) {
        return await prisma.command.findUnique({
            where: { id }
        })
    }
}

export default command