import express from "express";
import { mailRouter } from "./routes/sendAdminEmail.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = 4000;

app.use(cors());

app.use(express.json());

app.use("/", mailRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});
