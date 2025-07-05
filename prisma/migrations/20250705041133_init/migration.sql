-- CreateTable
CREATE TABLE "icons" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "category" VARCHAR(100),
    "tags" TEXT[],
    "svg_code" TEXT NOT NULL,
    "description" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "icons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "icons_name_key" ON "icons"("name");

-- CreateIndex
CREATE INDEX "icons_name_idx" ON "icons"("name");

-- CreateIndex
CREATE INDEX "icons_category_idx" ON "icons"("category");
