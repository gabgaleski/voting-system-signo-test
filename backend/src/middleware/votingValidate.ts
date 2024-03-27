import { Request, Response, NextFunction } from "express";

export default class VoteValidate {

  static validateCreateVoting(req: Request, res: Response, next: NextFunction): Response | void {
    const { title, initialDate, finalDate, options } = req.body;
    const currentDate = new Date();

    if (!title || !initialDate || !finalDate || !options) {
      return res.status(400).json({ message: "Invalid Fields" });
    }

    if (currentDate > initialDate || currentDate > finalDate || initialDate > finalDate) {
      return res.status(400).json({ message: "Invalid date" });
    }

    next();
  }

  static validateVote(req: Request, res: Response, next: NextFunction): Response | void {
    const { votes } = req.body;

    if (!votes) {
      return res.status(400).json({ message: "Invalid Fields" });
    }

    next();
  }
}