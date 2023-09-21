import {Sequelize} from "sequelize";
import db from "../Config/Database.js"
import Jurusan from "../Models/JurusanModel.js"

//Initialize Tabel Name of Database: Mahasiswa
const {DataTypes} = Sequelize;

const Mahasiswa = db.define("Mahasiswa",{
	idMahasiswa:{
		type:DataTypes.INTEGER,
		primaryKey:true,
		field:'id_mahasiswa'
	},
	idJurusan:{
		type:DataTypes.INTEGER,
		field:'id_jurusan',
		reference:{
			model:Jurusan,
			key:'id_jurusan'
		}
	},
	nama:DataTypes.STRING(50),
	tglLahir:{
		type:DataTypes.DATEONLY,
		field:'tgl_lahir'
	},
	tmpLahir:{
		type:DataTypes.STRING(50),
		field:'tmp_lahir'
	},
	alamat:DataTypes.STRING,
	telpon:DataTypes.STRING(50),
},{
	paranoid:true,
	createdAt:"created_at",
	updatedAt:"updated_at",
	deletedAt:"deleted_at",
	freezeTableName:true
});

// Jurusan.hasOne(Mahasiswa, {foreignKey: 'id_jurusan'}); // Mahasiswa HasOne Jurusan
// Mahasiswa.belongsTo(Jurusan, {foreignKey: 'id_jurusan'}); // Mahasiswa BelongsTo Jurusan

export default Mahasiswa;

// Create If Tabel Name = NULL
(async()=>{
	await db.sync();
})();