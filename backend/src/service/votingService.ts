import OptionsModel from "../database/models/optionsModel";
import VotingModel from "../database/models/votingModel";
import { IOptions } from "../interfaces/IOptions";
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

  public async create(data: returnVoting): Promise<{message: string} | null> {

    if (!data.options || data.options.length < 3) {
      return null;
    }

    const { options, title, initialDate, finalDate } = data;
    const createVoting = {
      title,
      initialDate,
      finalDate,
    };

    const voting = await VotingModel.create(createVoting);

    options.forEach(async (options: IOptions) => {
      const { value } = options;
      await OptionsModel.create({ votingId: voting.id, value, votes: 0 });
    })

    return {message: "SUCCESS"};
  }

  public async vote(id: number, vote: number): Promise<{message: string}> {
    const newVote = await OptionsModel.update({ votes: vote }, { where: { id } });

    if (newVote[0] === 0) {
      return { message: 'Option not found' };
    }
    return { message: 'Success' };
  }

  public async delete(id: number): Promise<{message: string}> {
    const deleted = await VotingModel.destroy({ where: { id } });
    const deletedOptions = await OptionsModel.destroy({ where: { votingId: id }});

    if (!deleted || !deletedOptions) {
      return { message: 'Voting not found' };
    }
    return { message: 'Success' };
  }
}