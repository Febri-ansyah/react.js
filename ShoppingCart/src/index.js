import Express from "express";
import db from "../config/database.js"
import ProductRoute from "../route/index.js"
import cors from "cors";

const app = Express();

try{
  await db.authenticate();
  console.log('Database connected..');
}catch(error){
  console.log("Connection Error:", error);
}

app.use(cors());
app.use(Express.json());
app.use("/Product", ProductRoute);

app.listen(5000, () => console.log("server running at port 5000"));