/*
  Warnings:

  - Made the column `group` on table `Contact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Contact` MODIFY `group` VARCHAR(191) NOT NULL;
