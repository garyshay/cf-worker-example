
```
pnpm wrangler d1 create d1-demo-prod-db
pnpm wrangler d1 create d1-demo-preview-db
pnpm wrangler d1 create d1-demo-development-db
```


## prod
1. create worker on cloudflare web ui
2. settings/general/build/git repo connect 
3. Build command `pnpm build`
4. Deploy command `npx wrangler deploy --env prod`


## staging
1. create worker on cloudflare web ui
2. settings/general/build/git repo connect 
3. Build command `pnpm build`
4. Deploy command `npx wrangler deploy --env staging`
