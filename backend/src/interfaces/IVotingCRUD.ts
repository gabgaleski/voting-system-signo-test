import { IOptions } from "./IOptions"

export type returnVoting = {
  id: number;
  title: string;
  initialDate: Date;
  finalDate: Date;
  options?: IOptions[];
}

export default interface IVotingCRUD {
  getAll(): Promise<returnVoting[]>
  create(data: returnVoting): Promise<{message: string} | null>
  vote(id: number, vote: number): Promise<{message: string}>
  delete(id: number): Promise<{message: string}>
}