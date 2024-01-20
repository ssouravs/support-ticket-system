/*
  Warnings:

  - The primary key for the `supportagent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `supportagent` table. All the data in the column will be lost.
  - The required column `agent_id` was added to the `SupportAgent` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `supportagent` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `agent_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`agent_id`);

-- CreateTable
CREATE TABLE `SupportTicket` (
    `ticket_id` VARCHAR(191) NOT NULL,
    `topic` VARCHAR(191) NOT NULL,
    `ticketCreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `severity` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `agentID` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `resolvedOn` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ticket_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SupportTicket` ADD CONSTRAINT `SupportTicket_agentID_fkey` FOREIGN KEY (`agentID`) REFERENCES `SupportAgent`(`agent_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
