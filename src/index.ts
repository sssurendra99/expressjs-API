import express from 'express';
import http from 'http';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import { PrismaClient} from '@prisma/client'

const app = express();
const prisma = PrismaClient();

app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
 
const server = http.createServer();

server.listen(5000, 
    () => {
        console.log(`Server running on http://localhost:5000`);
    }
)

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
