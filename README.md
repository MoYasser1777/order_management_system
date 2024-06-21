# order_management_system

## Description
The Order Management System is a web application designed to facilitate seamless management of orders, products, and user interactions. Built using NestJS for the backend, Prisma as the ORM, and PostgreSQL for data storage, the system offers robust functionalities such as:

**User Management:** Registration, authentication, and profile management.
**Product Catalog:** CRUD operations for products with details like name, description, price, and stock.
**Order Processing:** Creation, status updates, and total calculation including discounts using coupons.
**Shopping Cart:** Addition, removal, and quantity updates of products in the user's shopping cart.
**Coupon System:** Application of discounts to orders based on coupon codes.

The system's architecture ensures scalability and performance, leveraging modern web technologies to provide a responsive and efficient user experience.

## API & Schema Documentation
https://editor.swagger.io/?_gl=1*1csqun0*_gcl_au*MTQzMTc3ODQ2MS4xNzE5MDAyMzkx&_ga=2.170654313.873186214.1719002391-81124729.1719002391

## Prerequisites
Node.js and npm installed
PostgreSQL database

## Setup
1. **Clone the repository:**
   - git clone https://github.com/MoYasser1777/order_management_system.git
   - cd order_management_system
2. **Install dependencies:**
   - npm install
3. **Set up environment variables:**
Create a .env file in the root directory and configure database URL based on you Postgresql local database as the following :
DATABASE_URL="postgresql://database_user_name:database_password@localhost:port_number/database_name"
4. **Migrate the database and generate it:**
   - npx prisma migrate dev
   - npx prisma generate
5. **Generate seed data:**
   - npm run seed
6. **Start the application in development mode:**
   - npm run start:dev
7. **Run tests:**
   - npm test
