const { SnakeNamingStrategy } = require('typeorm-naming-strategies')

module.exports = {
  type: 'sqlite',
  database: process.env.DB_DIR || 'db/database.sqlite',
  entities: ['src/database/entity/*.ts'],
  migrations: ['src/database/migration/*.ts'],
  subscribers: ['src/database/subscriber/*.ts'],
  synchronize: false,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
  cli: {
    entitiesDir: 'src/database/entity',
    migrationsDir: 'src/database/migration',
    subscribersDir: 'src/database/subscriber',
  },
}
