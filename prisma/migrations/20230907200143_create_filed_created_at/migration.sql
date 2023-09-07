/*
  Warnings:

  - Added the required column `createdAt` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;
