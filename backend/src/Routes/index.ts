import { Router } from "express";
import votingRoute from "./votingRoute";

const router = Router();

router.use("/voting", votingRoute);

export default router;