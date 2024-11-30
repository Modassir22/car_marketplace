/** @type { import("drizzle-kit").Config } */
export default {
    schema:"./config/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:Yp3FwqrIvzO7@ep-polished-hall-a5jw994i.us-east-2.aws.neon.tech/car-marketplace?sslmode=require",
  }
};