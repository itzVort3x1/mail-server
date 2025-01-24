import express from "express";
import mailService from "../services/mailService.js";

const router = express.Router();

router.post("/sendEmail", async (req, res) => {
    console.log("Sending email to user...");
    const { email, username } = req.body;
    await mailService.sendEmail(email, username);
    res.status(200).json("Email sent successfully!");
});

router.post("/sendAdminEmail", async (req, res) => {
    console.log("Sending email to admin...");
    const { email, username, message } = req.body;
    await mailService.sendAdminEmail(email, username, message);
    res.status(200).json("Email sent successfully!");
});

export { router as mailRouter };
