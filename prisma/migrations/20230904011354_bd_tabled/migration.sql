-- CreateEnum
CREATE TYPE "Age" AS ENUM ('FILHOTE', 'ADULTO');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('PEQUENINO', 'MEDIO', 'GRANDE');

-- CreateEnum
CREATE TYPE "Independent" AS ENUM ('BAIXO', 'MEDIO', 'ALTO');

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" "Age" NOT NULL,
    "size" "Size" NOT NULL,
    "independent" "Independent" NOT NULL,
    "energy" INTEGER NOT NULL,
    "enviroment" TEXT NOT NULL,
    "imgsId" TEXT NOT NULL,
    "ongId" TEXT NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "petImgs" (
    "id" TEXT NOT NULL,
    "buffer" TEXT NOT NULL,
    "imgName" TEXT NOT NULL,
    "petId" TEXT NOT NULL,

    CONSTRAINT "petImgs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Requirements" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "petId" TEXT NOT NULL,

    CONSTRAINT "Requirements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "petImgs" ADD CONSTRAINT "petImgs_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Requirements" ADD CONSTRAINT "Requirements_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
