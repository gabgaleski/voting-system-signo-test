import { Request, Response } from "express";
import VotingService from "../service/votingService";

export default class VotingController {
  private votingService: VotingService;

  constructor() {
    this.votingService = new VotingService();
  }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const data = await this.votingService.getAll();

    return res.status(200).json(data);
  }
}