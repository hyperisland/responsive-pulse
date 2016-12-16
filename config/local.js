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
  db_url: process.env.MONGODB_URI
};