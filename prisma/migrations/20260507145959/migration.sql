-- AlterTable
ALTER TABLE "Command" ADD COLUMN     "slot_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Command" ADD CONSTRAINT "Command_slot_id_fkey" FOREIGN KEY ("slot_id") REFERENCES "Slot"("id") ON DELETE SET NULL ON UPDATE CASCADE;
