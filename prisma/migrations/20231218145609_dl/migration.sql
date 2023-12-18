/*
  Warnings:

  - You are about to alter the column `salary` on the `employes` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `employes` MODIFY `salary` INTEGER NOT NULL;
