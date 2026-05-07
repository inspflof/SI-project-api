/*
  Warnings:

  - Made the column `slot_id` on table `Command` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Command" DROP CONSTRAINT "Command_slot_id_fkey";

-- AlterTable
ALTER TABLE "Command" ALTER COLUMN "slot_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Command" ADD CONSTRAINT "Command_slot_id_fkey" FOREIGN KEY ("slot_id") REFERENCES "Slot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
