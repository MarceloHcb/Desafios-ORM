'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
  [
    {
      title: 'Código limpo: Habilidades práticas do Agile Software',
      author: 'Robert C. Martin',
      pageQuantity: 425,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      
    },
    {
      title: 'Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes',
      author: ' Thomas Nield',
      pageQuantity: 144,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      
    }
    
  ],{}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
