import { Router } from "express";
import { calculateWinner } from "./controller";

const router = Router()

router.post('/calculate_winner', calculateWinner)

export default router