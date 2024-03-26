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
}