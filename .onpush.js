console.log("hello from gh action");

const customScriptFilenames = [
  "changePassword",
  "create",
  "delete",
  "getByEmail",
  "login",
  "verify",
];

const DOMAIN = process.env.DOMAIN;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
console.log({ DOMAIN, CLIENT_ID: CLIENT_ID ? 'set' : 'not set', CLIENT_SECRET: CLIENT_SECRET ? 'set' : 'not set' });

const ManagementClient = require('auth0').ManagementClient;
const auth0 = new ManagementClient({
  domain: DOMAIN,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  scope: 'read:users update:users',
});
