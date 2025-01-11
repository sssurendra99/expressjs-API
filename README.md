# Express-API
Adapting the .NET development skills to express JS nd node JS.

# Tech stack

- express JS
- typescript 
- prisma as the ORM
- postgresql


# My Observations while learning the technology -
- Not that opinionated like .NET.
- Important learning how the node js work behind the scenes.
- Got the chance to learn the context object in the node js.

## Prisma

- In a model every field is a required field.
- According to prisma we could only use a one schema file which is  **schema.prisma** file.
- There you have to add the generator and the data source for your preferred database.
- You can have multiple schema files but not the model files.
- This is how it looks like for my postgresql setup.

```bash
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Book {
  id        String  @id @default(uuid())
  name      String
  available Boolean
}
```
- After creating your schema or models you have format using the prisma cli.

```bash
npx prisma format
```
- For Creating a Migration and applying.
```bash
npx prisma migrate dev --name <Migration Name>
```
## Milestones 
- Added a endpoint to get the books.
- Added the logging behaviour as a middleware.

## Resources
- [Prisma Documentation](https://www.prisma.io/docs/orm)
- [Folder structure](https://blog.treblle.com/egergr/)
- [Express JS code flaw](https://learn.microsoft.com/en-us/training/modules/build-web-api-nodejs-express/5-exercise-middleware?tabs=github-codespaces)