import { Router } from "express";
import { weatherForecast } from "../../Controllers/clima/Clima.controller.js";

const router = Router();

router.get("/forescast", weatherForecast);

export default router;