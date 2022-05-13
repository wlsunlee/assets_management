/*
  Warnings:

  - You are about to drop the column `coin_id` on the `blockchain_types` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `blockchain_types` DROP FOREIGN KEY `blockchain_types_coin_id_fkey`;

-- AlterTable
ALTER TABLE `blockchain_types` DROP COLUMN `coin_id`;

-- CreateTable
CREATE TABLE `coins_blockchain_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coin_id` INTEGER NOT NULL,
    `blockchain_type_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `coins_blockchain_types` ADD CONSTRAINT `coins_blockchain_types_coin_id_fkey` FOREIGN KEY (`coin_id`) REFERENCES `coins`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `coins_blockchain_types` ADD CONSTRAINT `coins_blockchain_types_blockchain_type_id_fkey` FOREIGN KEY (`blockchain_type_id`) REFERENCES `blockchain_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
