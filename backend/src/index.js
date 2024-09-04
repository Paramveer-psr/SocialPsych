import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();
connectDB()
  .then(
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on PORT: ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.error("Connection Failed ", err);
  });
