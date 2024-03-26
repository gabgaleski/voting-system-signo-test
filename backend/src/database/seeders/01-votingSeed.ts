import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('votings', [
      {
        title: 'Qual sua cor favorita?',
        initial_date: new Date(),
        final_date: new Date('2024-12-31'),
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('votings', {});
  },
}