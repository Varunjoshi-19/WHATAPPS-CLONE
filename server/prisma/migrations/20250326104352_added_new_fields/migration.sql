/*
  Warnings:

  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "about" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "profilePicture" TEXT NOT NULL DEFAULT '';
