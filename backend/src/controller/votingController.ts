import { Request, Response } from "express";
import VotingService from "../service/votingService";

export default class VotingController {
  private votingService: VotingService;

  constructor() {
    this.votingService = new VotingService();
  }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    try {
      const data = await this.votingService.getAll();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = await this.votingService.create(req.body);
      if (!data) {
        return res.status(400).json({ message: 'Need 3 or more options' });
      }
      return res.status(201).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public async vote(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { votes } = req.body;
      const data = await this.votingService.vote(Number(id), Number(votes));
      if (data.message === 'Option not found') {
        return res.status(404).json(data);
      }
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = await this.votingService.delete(Number(id));
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}