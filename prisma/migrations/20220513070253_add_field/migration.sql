/*
  Warnings:

  - Added the required column `blockchain_type_id` to the `deposits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blockchain_type_id` to the `withdrawals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `deposits` ADD COLUMN `blockchain_type_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `withdrawals` ADD COLUMN `blockchain_type_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `assets` ADD CONSTRAINT `assets_blockchain_type_id_fkey` FOREIGN KEY (`blockchain_type_id`) REFERENCES `blockchain_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `deposits` ADD CONSTRAINT `deposits_blockchain_type_id_fkey` FOREIGN KEY (`blockchain_type_id`) REFERENCES `blockchain_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `withdrawals` ADD CONSTRAINT `withdrawals_blockchain_type_id_fkey` FOREIGN KEY (`blockchain_type_id`) REFERENCES `blockchain_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
