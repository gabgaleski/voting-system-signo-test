import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IOptions } from '../../interfaces/IOptions';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IOptions>>('options', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      value: {
        type: DataTypes.STRING,
        field: 'value',
        allowNull: false,
      },
      votes: {
        type: DataTypes.INTEGER,
        field: 'votes',
        allowNull: false,
        defaultValue: 0,
      },
      votingId: {
        type: DataTypes.INTEGER,
        field: 'voting_id',
        allowNull: false,
      },
    });
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('options');
  },
};