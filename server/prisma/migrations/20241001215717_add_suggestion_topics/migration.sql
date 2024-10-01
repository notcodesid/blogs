-- CreateTable
CREATE TABLE "Topic" (
    "id" SERIAL NOT NULL,
    "Topic" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);
