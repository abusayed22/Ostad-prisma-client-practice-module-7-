/*
  Warnings:

  - Added the required column `birthD` to the `employes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employes` ADD COLUMN `birthD` VARCHAR(191) NOT NULL;
