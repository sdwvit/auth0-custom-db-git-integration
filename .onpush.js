console.log("hello from gh action");

const DOMAIN = process.env.DOMAIN;
const CONNECTION_ID = process.env.CONNECTION_ID;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
console.log({
  DOMAIN: DOMAIN ? "set" : "not set",
  CLIENT_ID: CLIENT_ID ? "set" : "not set",
  CLIENT_SECRET: CLIENT_SECRET ? "set" : "not set",
});

const ManagementClient = require("auth0").ManagementClient;
const auth0 = new ManagementClient({
  domain: DOMAIN,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  scope: "update:connections",
  "audience":`${DOMAIN}/api/v2/`,
  "grant_type":"client_credentials"
});

const customScripts = {
  change_password: require("./changePassword.js"),
  create: require("./create.js"),
  delete: require("./delete.js"),
  get_user: require("./getByEmail.js"),
  login: require("./login.js"),
  verify: require("./verify.js"),
};

auth0.connections.update(
  { id: CONNECTION_ID },
  {
    customScripts: customScripts,
  }
);
