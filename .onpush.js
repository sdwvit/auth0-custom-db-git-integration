console.log('Running sync script');
const fs = require('fs')
const DOMAIN = process.env.DOMAIN;
const CONNECTION_ID = process.env.CONNECTION_ID;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const ManagementClient = require("auth0").ManagementClient;
const auth0 = new ManagementClient({
  domain: DOMAIN,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

const customScripts = {
  change_password: fs.readFileSync("./changePassword.js").toString(),
  create: fs.readFileSync("./create.js").toString(),
  delete: fs.readFileSync("./delete.js").toString(),
  get_user: fs.readFileSync("./getByEmail.js").toString(),
  login: fs.readFileSync("./login.js").toString(),
  verify: fs.readFileSync("./verify.js").toString(),
};

auth0.connections.update(
  { id: CONNECTION_ID },
  {
    options: {
      customScripts: customScripts,
    }
  }
).then(response => {
  console.log('Received response: ', response);
});

console.log('Done!')