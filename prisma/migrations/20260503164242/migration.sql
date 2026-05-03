-- DropForeignKey
ALTER TABLE "Slot" DROP CONSTRAINT "Slot_vehicle_id_fkey";

-- AlterTable
ALTER TABLE "Slot" ALTER COLUMN "vehicle_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Slot" ADD CONSTRAINT "Slot_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
