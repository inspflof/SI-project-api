/*
  Warnings:

  - A unique constraint covering the columns `[vehicle_id]` on the table `Slot` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Slot_vehicle_id_key" ON "Slot"("vehicle_id");
