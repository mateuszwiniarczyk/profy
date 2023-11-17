/*
  Warnings:

  - You are about to drop the column `userId` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Employee` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Company_userId_key";

-- DropIndex
DROP INDEX "Employee_userId_key";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "userId";
