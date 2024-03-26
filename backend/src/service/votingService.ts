// import OptionsModel from "../database/models/optionsModel";
import OptionsModel from "../database/models/optionsModel";
import VotingModel from "../database/models/votingModel";
import IVotingCRUD, { returnVoting } from "../interfaces/IVotingCRUD";

export default class VotingService implements IVotingCRUD {
  
  public async getAll(): Promise<returnVoting[]> {
    const data = await VotingModel.findAll({
      include: {
        model: OptionsModel,
        as: 'options',
      }
    });

    return data;
  }
}