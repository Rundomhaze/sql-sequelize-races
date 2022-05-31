const { sequelize } = require('./models');
const { QueryTypes } = require('sequelize');

async function selectInfo() {
  const result = await sequelize.query(
    'SELECT race_id FROM entries JOIN horses ON entries.horse_id = horses.id WHERE horse_id = 1',
    {type: QueryTypes.SELECT}
  );
  console.log(result);
};


selectInfo();
