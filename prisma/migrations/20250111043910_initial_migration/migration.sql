-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
