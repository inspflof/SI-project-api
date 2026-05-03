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

    async editPost(postId: number, vehicleId?: string) {
        return await prisma.slot.update({
            where : {
                id: postId
            },
            data: {
                is_occupied: !!vehicleId,
                vehicle_id: vehicleId
            }
        })
    }
}

export default slot