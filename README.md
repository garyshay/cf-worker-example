# cf-worker-example

## Clone This Project
```shell
git clone https://github.com/garyshay/cf-worker-example.git
``` 
## Creating a Cloudflare API Token with Edit Cloudflare Workers and D1 Permissions
1. Visit the [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens) page.  
2. Click **Create Token**.  
3. Under the **Edit Cloudflare Workers** template, click **Use template**.  
4. Change the **Token Name** to `Edit Cloudflare Workers:date:purpose` (e.g., `Edit Cloudflare Workers:2024-11-20:yourreponame`).  
5. In the **Permissions** section, click **Add more**.  
6. Select **D1 Edit** permission.  
7. Under **Account Resources**, choose your account.  
8. Under **Zone Resources**, select **All zones**.  
9. Review the details and click to create the API Token.

## Create D1 Databases

1. Create two D1 databases:
   - One with a `-prod` suffix, e.g., `cf-worker-example-prod`
   - Another with a `-staging` suffix, e.g., `cf-worker-example-staging`
   
2. Record the **name** and **ID** of each database:
   - For example:
     - **Database Name**: `cf-worker-example-prod`
     - **Database ID**: `<cf-worker-example-prod's ID>`
     - **Database Name**: `cf-worker-example-staging`
     - **Database ID**: `<cf-worker-example-staging's ID>`
## Configure GitHub Actions Secrets and Variables

### 1. Configure Secrets:
   - Add `CLOUDFLARE_API_TOKEN` and set its value to your Cloudflare API Token:
     ```bash
     CLOUDFLARE_API_TOKEN=your CLOUDFLARE_API_TOKEN
     ```

### 2. Configure Variables:
   - Add the following variables:

     ```
     CF_WORKER_NAME_PROD=your cf worker name for prod
     CF_WORKER_NAME_STAGING=your cf worker name for staging
     MAIN=prod
     MAIN_DB=cf-worker-example-prod
     MAIN_DB_ID=<cf-worker-example-prod's ID>
     STAGING=staging
     STAGING_DB=cf-worker-example-staging
     STAGING_DB_ID=<cf-worker-example-staging's ID>
     ```