/*
  Warnings:

  - The `role` column on the `Account` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `type` column on the `Account` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `avatar` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AccountRole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('EMPLOYEE', 'COMPANY');

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "avatar" TEXT NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "AccountRole" NOT NULL DEFAULT 'USER',
DROP COLUMN "type",
ADD COLUMN     "type" "AccountType" NOT NULL DEFAULT 'COMPANY';

-- DropEnum
DROP TYPE "Role";

-- DropEnum
DROP TYPE "Type";
