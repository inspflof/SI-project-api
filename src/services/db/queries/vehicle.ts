import { prisma } from "../../../config/prisma.js";

const vehicle =  {
    async create(immatriculation: string) {
        return await prisma.vehicle.create({
            data: {
                immatriculation,
            }
        })
    },

    async getAll() {
        return await prisma.vehicle.findMany({
            include: {
                command: {
                    orderBy: {
                        created_at: "desc"
                    },
                    take: 1
                },
                slot: true
            }
        })
    },

    async getById(id: string) {
        return await prisma.vehicle.findUnique({
            where: { id },
            include: {
                command: true,
                slot: true
            }
        })
    } 
}

export default vehicle