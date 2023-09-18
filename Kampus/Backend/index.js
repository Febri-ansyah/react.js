import Express from "express";
import Cors from "cors";
import JurusanRoute from "./Routes/JurusanRoute.js";

// Initialize Server
const App = Express();
App.use(Cors());
App.use(Express.json());
App.use(JurusanRoute);

App.listen(5000, ()=>console.log("Server Running On http://localhost:5000/ ..."))