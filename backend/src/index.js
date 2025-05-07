import dotenv from "dotenv";
import { app } from "./app.js";
import connectToDB from "./db/index.js";
import { agenda } from "./utils/emailScheduler.js";

dotenv.config({ path: "./.env" });

// Connect to database
const startServer = async () => {
  try {
    await connectToDB();
    
    if (process.env.VERCEL) {
      // For Vercel deployment
      console.log("Running in Vercel environment");
      return app;
    } else {
      // For local development
      const port = process.env.PORT || 3000;
      app.listen(port, "0.0.0.0", () => {
        console.log("Server is listening on port: ", port);
      });

      app.on("error", (error) => {
        console.log("Error while talking with database: ", error);
      });

      // Start agenda scheduler
      agenda.on("ready", () => {
        agenda.start();
      });
    }
  } catch (error) {
    console.log("Server initialization failed:", error);
    throw error;
  }
};

// Start server and export for Vercel
const serverInstance = startServer();
export default serverInstance;
