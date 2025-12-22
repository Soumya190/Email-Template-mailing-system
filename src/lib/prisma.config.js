const { PrismaClient } = require("@prisma/client");

if (!global.prisma) {
  global.prisma = new PrismaClient({
    adapter: process.env.DATABASE_URL,
  });
}

const prisma = global.prisma;

module.exports = { prisma };
