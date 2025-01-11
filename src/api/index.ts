import express from 'express';
import { PrismaClient} from '@prisma/client'
import bodyParser from 'body-parser';

export const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


async function main() {
    
}

main()
    .then(async() => {
        await prisma.$disconnect()
    })
    .catch(async(e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
