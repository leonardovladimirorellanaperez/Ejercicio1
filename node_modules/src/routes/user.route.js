import { Router } from "express";
import { renderHome, renderForm, processForm, renderConfirm } from "../controllers/user.controller.js";

const router = Router();

router.get("/", renderHome);
router.get("/form", renderForm);
router.post("/submit", processForm);
router.get("/confirm", renderConfirm);

export default router;
