-- AlterTable
ALTER TABLE `assets` MODIFY `quantity` DECIMAL(24, 12) NOT NULL;

-- AlterTable
ALTER TABLE `deposits` MODIFY `quantity` DECIMAL(24, 12) NOT NULL;

-- AlterTable
ALTER TABLE `withdrawals` MODIFY `quantity` DECIMAL(24, 12) NOT NULL;
