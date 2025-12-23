// const { PrismaClient } = require("@prisma/client");

// if (!global.prisma) {
//   global.prisma = new PrismaClient({
//     log: ["query", "error"], // optional for debugging
//   });
// }

// const prisma = global.prisma;

// module.exports = { prisma };

// if (!global.prisma) {
//   global.prisma = new PrismaClient({
//     adapter: process.env.DATABASE_URL,
//   });
// }

// const prisma = global.prisma;

// module.exports = { prisma };

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient({
//   adapter: process.env.DATABASE_URL, // Direct database connection
// });

// export { prisma };


import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

