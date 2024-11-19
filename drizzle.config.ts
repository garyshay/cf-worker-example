// drizzle.config.ts
import type { Config } from "drizzle-kit";

const { DB_ID, D1_TOKEN, CF_ACCOUNT_ID } = process.env;

// Use better-sqlite driver for local development
export default {
    schema: "./src/schema.ts",
    out: "./migrations",
    dialect: "sqlite",
    driver: "d1-http",
    dbCredentials: {
        databaseId: DB_ID!,
        token: D1_TOKEN!,
        accountId: CF_ACCOUNT_ID!,
    },
} satisfies Config