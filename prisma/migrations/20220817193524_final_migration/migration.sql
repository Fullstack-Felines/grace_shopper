/*
  Warnings:

  - You are about to drop the column `cart_id` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `kitten_id` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the `cart` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `price` on table `kittens` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `customer_id` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipping_address` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_amount` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cart" DROP CONSTRAINT "cart_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_cart_id_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_kitten_id_fkey";

-- AlterTable
ALTER TABLE "kittens" ALTER COLUMN "price" SET NOT NULL;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "cart_id",
DROP COLUMN "kitten_id",
ADD COLUMN     "customer_id" INTEGER NOT NULL,
ADD COLUMN     "is_active" BOOLEAN DEFAULT true,
ADD COLUMN     "shipping_address" VARCHAR(255) NOT NULL,
ADD COLUMN     "total_amount" INTEGER NOT NULL;

-- DropTable
DROP TABLE "cart";

-- CreateTable
CREATE TABLE "orders_kitten" (
    "id" SERIAL NOT NULL,
    "kitten_id" INTEGER NOT NULL,
    "order_id" INTEGER NOT NULL,

    CONSTRAINT "orders_kitten_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders_kitten" ADD CONSTRAINT "orders_kitten_kitten_id_fkey" FOREIGN KEY ("kitten_id") REFERENCES "kittens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "orders_kitten" ADD CONSTRAINT "orders_kitten_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
