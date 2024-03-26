import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
  import db from '.';

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
  modelName: 'voting',
  timestamps: false,
  underscored: true,
});

export default VotingModel;