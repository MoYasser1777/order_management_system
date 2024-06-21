<<<<<<< HEAD
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
=======
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
>>>>>>> b48fe3c1e4b3697658a3d4d262e90aa1b42bdb68
