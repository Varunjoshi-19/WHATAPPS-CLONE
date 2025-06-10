/*
  Warnings:

  - Added the required column `message` to the `Messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Messages" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "messageStatus" TEXT NOT NULL DEFAULT 'sent',
ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'text';
