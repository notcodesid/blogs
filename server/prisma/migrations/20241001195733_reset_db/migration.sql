/*
  Warnings:

  - You are about to drop the column `codeSnippet` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Blog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "codeSnippet",
DROP COLUMN "image";
