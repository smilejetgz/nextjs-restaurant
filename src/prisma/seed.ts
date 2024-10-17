import { type Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { slugify } from '@/features/shared/helpers/slugify';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: {},
    create: {
      email: 'admin@admin.com',
      name: 'Admin',
      role: 'ADMIN',
      password: await bcrypt.hash('password', 12),
      telephone: '1234567890',
    },
  });

  // Create Users
  const numsOfUsers = 10;
  const userIds: string[] = [admin.id];
  const adminIds: string[] = [admin.id];
  for (let i = 0; i < numsOfUsers; i++) {
    const createUserInput: Prisma.UserCreateInput = {
      email: faker.internet.email(),
      name: faker.internet.displayName(),
      role: 'USER',
      password: await bcrypt.hash('password', 12),
      telephone: faker.phone.number(),
    };

    const user = await prisma.user.upsert({
      where: { email: createUserInput.email },
      update: {},
      create: createUserInput,
    });

    userIds.push(user.id);
    if (user.role !== 'USER') adminIds.push(user.id);
  }

  // Create Categories
  const numOfcategories = 5;
  const categoryIds: string[] = [];
  for (let i = 0; i < numOfcategories; i++) {
    const name = faker.word.noun();
    const createCategoryInput: Prisma.CategoryCreateInput = {
      name,
      slug: slugify(name),
    };

    const category = await prisma.category.upsert({
      where: { name },
      update: {},
      create: createCategoryInput,
    });

    categoryIds.push(category.id);
  }

  // Create Products
  const numOfProducts = 200;
  const productIds: string[] = [];
  for (let i = 0; i < numOfProducts; i++) {
    const name = faker.commerce.productName();
    const createProductInput: Prisma.ProductCreateInput = {
      name,
      slug: slugify(name),
      price: parseFloat(faker.commerce.price()),
      description: faker.commerce.productDescription(),
      image: faker.image.url(),
      category: { connect: { id: faker.helpers.arrayElement(categoryIds) } },
    };

    const product = await prisma.product.upsert({
      where: { name },
      update: {},
      create: createProductInput,
    });

    productIds.push(product.id);
  }

  // Create Orders
  const numOfOrders = 500;
  const orderIds: string[] = [];
  for (let i = 0; i < numOfOrders; i++) {
    const createOrderInput: Prisma.OrderCreateInput = {
      user: { connect: { id: faker.helpers.arrayElement(userIds) } },
      status: faker.helpers.arrayElement(['PENDING', 'CONFIRMED', 'CANCELLED']),
    };

    const order = await prisma.order.create({
      data: createOrderInput,
    });

    orderIds.push(order.id);
  }

  // Create OrderItems
  for (const orderId of orderIds) {
    const numOfOrderItems = faker.number.int({ min: 1, max: 5 });
    for (let i = 0; i < numOfOrderItems; i++) {
      const productId = faker.helpers.arrayElement(productIds);
      const product = await prisma.product.findUnique({
        where: { id: productId },
      });

      if (product) {
        // ตรวจสอบว่ามี OrderItem ที่มี orderId และ productId เดียวกันอยู่แล้วหรือไม่
        const existingOrderItem = await prisma.orderItem.findUnique({
          where: {
            orderId_productId: {
              orderId: orderId,
              productId: productId,
            },
          },
        });

        if (!existingOrderItem) {
          const createOrderItemInput: Prisma.OrderItemCreateInput = {
            order: { connect: { id: orderId } },
            product: { connect: { id: productId } },
            productPrice: product.price,
            quantity: faker.number.int({ min: 1, max: 10 }),
          };

          await prisma.orderItem.create({
            data: createOrderItemInput,
          });
        }
      }
    }
  }

  // Create Invoices
  for (const orderId of orderIds) {
    const createInvoiceInput = {
      image: faker.image.url(),
      status: faker.helpers.arrayElement(['PENDING', 'PAID']),
      totalPrice: parseFloat(faker.commerce.price()),
      order: { connect: { id: orderId } },
    };

    await prisma.invoice.create({
      data: createInvoiceInput,
    });
  }

  // Create Deliveries
  for (const orderId of orderIds) {
    const createDeliveryInput = {
      status: faker.helpers.arrayElement(['PENDING', 'DELIVERED']),
      order: { connect: { id: orderId } },
    };

    await prisma.delivery.create({
      data: createDeliveryInput,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
