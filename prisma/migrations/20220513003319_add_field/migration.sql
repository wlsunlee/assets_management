/*
  Warnings:

  - Added the required column `blockchain_type_id` to the `assets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `assets` ADD COLUMN `blockchain_type_id` INTEGER NOT NULL;
