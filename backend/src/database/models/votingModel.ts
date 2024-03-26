import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
  import db from '.';
import OptionsModel from './optionsModel';

class VotingModel extends Model<InferAttributes<VotingModel>,
InferCreationAttributes<VotingModel>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare initialDate: Date;
  declare finalDate: Date;
}

VotingModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  initialDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  finalDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'votings',
  timestamps: false,
  underscored: true,
});

VotingModel.hasMany(OptionsModel, {
  foreignKey: 'votingId',
  as: 'options'
});

export default VotingModel;