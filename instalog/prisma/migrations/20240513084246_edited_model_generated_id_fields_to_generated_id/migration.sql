/*
  Warnings:

  - You are about to drop the column `actionGeneratedId` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `actorGeneratedId` on the `Actor` table. All the data in the column will be lost.
  - You are about to drop the column `eventGeneratedId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `targetGeneratedId` on the `Target` table. All the data in the column will be lost.
  - Added the required column `generatedId` to the `Action` table without a default value. This is not possible if the table is not empty.
  - Added the required column `generatedId` to the `Actor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `generatedId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `generatedId` to the `Target` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Action" DROP COLUMN "actionGeneratedId",
ADD COLUMN     "generatedId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Actor" DROP COLUMN "actorGeneratedId",
ADD COLUMN     "generatedId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "eventGeneratedId",
ADD COLUMN     "generatedId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Target" DROP COLUMN "targetGeneratedId",
ADD COLUMN     "generatedId" TEXT NOT NULL;
