import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('options', [
      {
        value: 'Azul',
        votes: 0,
        voting_id: 1,
      },
      {
        value: 'Amarelo',
        votes: 0,
        voting_id: 1,
      },
      {
        value: 'Verde',
        votes: 0,
        voting_id: 1,
      },
      {
        value: 'Vermelho',
        votes: 0,
        voting_id: 1,
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('options', {});
  },
}