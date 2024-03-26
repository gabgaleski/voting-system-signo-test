import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
  import db from '.';

class OptionsModel extends Model<InferAttributes<OptionsModel>,
InferCreationAttributes<OptionsModel>> {
  declare id: CreationOptional<number>;
  declare votingId: number;
  declare votes: number;
  declare value: string;
}

OptionsModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false
  },
  votes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  votingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'voting_id'
  }
}, {
  sequelize: db,
  modelName: 'options',
  timestamps: false,
  underscored: true,
});

export default OptionsModel;