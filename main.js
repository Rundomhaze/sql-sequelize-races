const { sequelize } = require('./models');

async function createTables() {
  await sequelize.query(
    'CREATE TABLE jockeys(id serial PRIMARY KEY, name text, created_at date, updated_at date);'
  );
  await sequelize.query(
    'CREATE TABLE horses(id serial PRIMARY KEY, name text, breed text, created_at date, updated_at date);'
  );
  await sequelize.query(
    'CREATE TABLE races(id serial PRIMARY KEY, name text, location text, date text, created_at date, updated_at date);'
  );
  await sequelize.query(
    'CREATE TABLE entries(id serial PRIMARY KEY, race_id integer REFERENCES races(id), jockey_id integer REFERENCES jockeys(id), horse_id integer REFERENCES horses(id), created_at date, updated_at date);'
  );


  await sequelize.query(
    `INSERT INTO jockeys (name, created_at, updated_at) VALUES ('Petr', NOW(), NOW()), ('Leha', NOW(), NOW()), ('Joahn', NOW(), NOW())`
  );
  await sequelize.query(
    `INSERT INTO horses (name, breed, created_at, updated_at) VALUES ('Koni', 'Mustang', NOW(), NOW()), ('Yeti', 'Shair', NOW(), NOW()), ('Star', 'Appaluza', NOW(), NOW())`
  );
  await sequelize.query(
    `INSERT INTO races (name, location, date, created_at, updated_at) VALUES ('Race One', 'Dubai', '22.10.20', NOW(), NOW()), ('Race Two', 'OAЭ', '10.05.21', NOW(), NOW()), ('Race Three', 'Egypt', '12.04.22', NOW(), NOW())`
  );
  await sequelize.query(
    `INSERT INTO entries (race_id, jockey_id, horse_id, created_at, updated_at) VALUES (1,2,3,NOW(), NOW()), (3,2,1,NOW(), NOW()), (2,1,3,NOW(), NOW())`
  );

};



createTables();



