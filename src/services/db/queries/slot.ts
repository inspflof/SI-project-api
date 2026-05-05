import { prisma } from "../../../config/prisma.js"

const slot = {
    async getEmpty() {
        return await prisma.slot.findFirst({
            where: {
                is_occupied: false
            },
            orderBy: [
                { x: "asc" },
                { y: "asc" }

            ]
        }) 
    },

    async edit(slotId: number, vehicleId?: string) {
        return await prisma.slot.update({
            where : {
                id: slotId
            },
            data: {
                is_occupied: !!vehicleId,
                vehicle_id: vehicleId
            }
        })
    },

    async getAll() {
        return await prisma.slot.findMany({
            orderBy: [
                { x: "asc"},
                { y: "asc"}
            ]
        })
    }
}

export default slot