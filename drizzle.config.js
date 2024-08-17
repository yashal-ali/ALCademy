import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: '/home/yashal/Documents/August/AI-Content-In-Education/ai-content-education/utils/Schema.ts', // Path to your schema file(s)
  dialect:'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:HfyGbADv6E5m@ep-winter-bird-a5h8cyoz.us-east-2.aws.neon.tech/Brain-Wave-Ai?sslmode=require'
  },

  
});
