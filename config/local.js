module.exports = {
  auth: {
    secret: 'a secret',
    adminPassword: 'an admin password'
  },
  session: {
    secret: 'another secret'
  },
  email: {
    from: 'an email address',
    accessKeyId: 'an access key id',
    secretAccessKey: 'a secret access key',
    rateLimit: 1,
    region: 'a region'
  },
  url: {
    production: 'a url',
    staging: 'https://hyper-island-responsive-pulse.herokuapp.com/'
  },
  db: {
    ip: process.env.MONGODB_IP,
    port: process.env.MONGODB_PORT,
    database: process.env.MONGODB_DATABASE,
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD
  }
};