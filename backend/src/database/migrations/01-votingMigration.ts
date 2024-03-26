import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IVoting } from '../../interfaces/IVoting';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IVoting>>('voting', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        field: 'title',
        allowNull: false,
      },
      initialDate: {
        type: DataTypes.DATE,
        field: 'initial_date',
        allowNull: false,
      },
      finalDate: {
        type: DataTypes.DATE,
        field: 'final_date',
        allowNull: false,
      },
    });
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('voting');
  },
};