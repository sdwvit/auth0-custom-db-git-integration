# auth0-custom-db-git-integration

Example implementation of custom db scripts syncronization with dashboard via Auth0 management api.

### Prerequisites

1. Register an account at auth0.com
2. In dashboard, create a custom database connection
3. Create an application and set it to use Auth0 Management API
4. Fill up github actions secrets with `DOMAIN`, `CLIENT_ID`, `CLIENT_SECRET` using application from the previous step. Also add `CONNECTION_ID` of the custom db from step 2.
5. Edit custom db scripts (*.js files in the root of this repo). Commit & push.
6. Check Custom Database tab in Auth0 dashboard to see updated custom scripts.
