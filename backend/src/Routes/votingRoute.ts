import { Request, Response } from "express";
import { Router } from "express";
import VotingController from "../controller/votingController";

const router = Router();
const votingController = new VotingController();

router.get("/",
(req: Request, res: Response) => votingController.getAll(req, res));

export default router;