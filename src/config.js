import { config } from "dotenv";
config()
export const S= process.env.MONGODB_URI;
console.log(process.env.MONGODB_URI);