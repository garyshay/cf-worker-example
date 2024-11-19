
```
pnpm wrangler d1 create d1-demo-prod-db
pnpm wrangler d1 create d1-demo-staging-db
```

## DB
1. create   on web ui
2. migrate  
3. bind     on web ui

## prod
1. create worker on cloudflare web ui
2. settings/general/build/git repo connect 
3. Build command `pnpm build`
4. Deploy command `npx wrangler deploy --env prod`
5. settings/Domains & Routes/ Add Domain


## staging
1. create worker on cloudflare web ui
2. settings/general/build/git repo connect 
3. Build command `pnpm build`
4. Deploy command `npx wrangler deploy --env staging`
