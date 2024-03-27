import { Request, Response } from "express";
import { Router } from "express";
import VotingController from "../controller/votingController";

const router = Router();
const votingController = new VotingController();

router.get("/",
(req: Request, res: Response) => votingController.getAll(req, res));
router.post("/",
(req: Request, res: Response) => votingController.create(req, res));
router.put("/:id",
(req: Request, res: Response) => votingController.vote(req, res));
router.delete("/:id",
(req: Request, res: Response) => votingController.delete(req, res));

export default router;