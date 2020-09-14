module.exports = {
  test: {
    client: 'pg',
    connection: {
      hostname: '127.0.0.1',
      user: 'postgres',
      password: '12345678',
      database: 'tusitala-test'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }  
  },
  development: {
    client: 'pg',
    connection: {
      hostname: '127.0.0.1',
      user: 'postgres',
      password: '12345678',
      database: 'tusitala'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }  
  }
};
