/*
  Warnings:

  - The primary key for the `Coupon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `validUntil` on the `Coupon` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Coupon_code_key";

-- AlterTable
ALTER TABLE "Coupon" DROP CONSTRAINT "Coupon_pkey",
DROP COLUMN "id",
DROP COLUMN "validUntil",
ADD CONSTRAINT "Coupon_pkey" PRIMARY KEY ("code");

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "total" DROP NOT NULL;
