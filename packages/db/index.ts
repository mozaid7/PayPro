import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prismaGlobal: undefined | PrismaClient;
}

const prisma: PrismaClient = globalThis.prismaGlobal ?? prismaClientSingleton();

// Ensure that prismaGlobal is only set in development
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;

export default prisma;
