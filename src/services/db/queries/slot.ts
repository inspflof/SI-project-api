import { prisma } from "../../../config/prisma.js"

const slot = {
    async getEmpty() {
        return await prisma.slot.findFirst({
            where: {
                is_occupied: false
            },
            orderBy: {
                x: "asc"
            }
        }) 
    }
}

export default slot