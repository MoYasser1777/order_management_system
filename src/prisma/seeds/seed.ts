const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      address: '123 Main St, Anytown',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'password456',
      address: '456 Elm St, Anytown',
    },
  });

  const product1 = await prisma.product.create({
    data: {
      name: 'Product A',
      description: 'Description of Product A',
      price: 19.99,
      stock: 100,
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Product B',
      description: 'Description of Product B',
      price: 29.99,
      stock: 50,
    },
  });

  const coupon = await prisma.coupon.create({
    data: {
      code: 'FIRST50',
      discount: 50, // 50% discount
    },
  });

  console.log('Seed data created successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
