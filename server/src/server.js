import app from "./app.js";
import connectDB from "./database/db.js";

const PORT = 5000;

app.listen(PORT, async (req, res) => {
  try {
    await connectDB();
    console.log(`server started on PORT:${PORT}`);
  } catch (error) {
    console.log("error connecting to server");
  }
});
