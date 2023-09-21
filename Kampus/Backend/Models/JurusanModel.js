import {Sequelize} from "sequelize";
import db from "../Config/Database.js"

//Initialize Tabel Name of Database: Jurusan
const {DataTypes} = Sequelize;

const Jurusan = db.define("Jurusan",{
	idJurusan:{
		type:DataTypes.INTEGER,
		primaryKey:true,
		field:'id_jurusan'
	},
	keterangan:DataTypes.STRING(50)
},{
	paranoid:true,
	createdAt:"created_at",
	updatedAt:"updated_at",
	deletedAt:"deleted_at",
	freezeTableName:true
})

export default Jurusan;

// Create If Tabel Name = NULL
(async()=>{
	await db.sync();
})();