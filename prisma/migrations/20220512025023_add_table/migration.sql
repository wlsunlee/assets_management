/*
  Warnings:

  - You are about to drop the column `blockchain_type` on the `coins` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `coins` DROP COLUMN `blockchain_type`;

-- CreateTable
CREATE TABLE `blockchain_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coin_id` INTEGER NOT NULL,
    `type_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `blockchain_types` ADD CONSTRAINT `blockchain_types_coin_id_fkey` FOREIGN KEY (`coin_id`) REFERENCES `coins`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
