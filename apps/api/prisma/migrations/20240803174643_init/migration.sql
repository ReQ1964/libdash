-- CreateTable
CREATE TABLE "Reader" (
    "id" SERIAL NOT NULL,
    "initials" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,

    CONSTRAINT "Reader_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "tags" TEXT[],
    "pagesNumber" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "borrowedFrom" TEXT,
    "borrowedTill" TEXT,
    "readerId" INTEGER,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_readerId_fkey" FOREIGN KEY ("readerId") REFERENCES "Reader"("id") ON DELETE SET NULL ON UPDATE CASCADE;
