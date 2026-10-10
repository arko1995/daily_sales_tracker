import app from "./app.js";
import connectDB from "./database/db.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = 5000;

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, async (req, res) => {
      console.log(`server started on PORT:${PORT}`);
    });
  } catch (error) {
    console.log(`Error starting server ${error}`);
  }
}

startServer();
