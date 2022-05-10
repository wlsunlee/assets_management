const http = require("http");
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const routes = require("./routes");
const cors = require("cors");
const dotenv = require("dotenv");

const prisma = new PrismaClient();
const serverPort = process.env.SERVER_PORT;
const app = express();
const server = http.createServer(app);

dotenv.config();
app.use(express.json());
app.use(cors({origin: process.env.DOMAIN, credentials: true}));
app.use(routes);

const start = async () => {
    try {
      server.listen(serverPort, () => console.log(`server is listening on PORT ${serverPort}`))
    } catch (err) { 
      console.error(err)
      await prisma.$disconnect();
    }
  }
  
  start();