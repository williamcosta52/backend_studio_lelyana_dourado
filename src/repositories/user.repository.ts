import prisma from '../config';

export async function findUserByEmail(email: string) {
  return prisma.user.findFirst({
    where: { email },
  });
}

export async function CreateUser(
  email: string,
  password: string,
  name: string
) {
  const date = new Date();
  return prisma.user.create({
    data: {
      email,
      password,
      name,
      createdAt: date,
    },
  });
}
