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
        return await prisma.vehicle.findMany()
    },

    async getById(id: string) {
        return await prisma.vehicle.findUnique({
            where: { id }
        })
    } 
}

export default vehicle