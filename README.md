# Fish Email Service

## Third Party Libraries

- [x] Express
- [x] Cors
- [x] dotenv = Environment
- [x] morgan = View Log
- [x] zod = Validation
- [ ] Axios
- [ ] node mailer

## Third Party Typescript Libraries (For Dev Dependencies)

- [x] typescript
- [ ] tsc
- [ ] ts-node-dev
- [ ] tsc-alias
- [ ] tsconfig-paths
- [ ] @types/express
- [ ] @types/node
- [ ] @types/corse
- [ ] prisma
- [ ] @prisma/client

```Run this Command
    yarn
```

```Run this Command
    npx prisma init --datasource-provider postgresql
```

<p>After Creating a prisma Model</p>

```Run this Command
    yarn migrate:dev
```

## Endpoints

- [x] Send Email
- [x] Retrieve All Emails

## Send Message

- [x] RabbitMQ
  - [ ] For Send Email Including Order Confirmation
