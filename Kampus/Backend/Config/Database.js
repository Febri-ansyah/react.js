import {Sequelize} from "sequelize";

// Initialize Connection of Database 
const db = new Sequelize("febriansyah_db","root","",{
	host:"localhost",
	dialect:"mysql"
})

export default db;