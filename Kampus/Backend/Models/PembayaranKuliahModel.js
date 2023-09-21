import {Sequelize} from "sequelize";
import db from "../Config/Database.js"
import Mahasiswa from "../Models/MahasiswaModel.js"

//Initialize Tabel Name of Database: PembayaranKuliah
const {DataTypes} = Sequelize;

const PembayaranKuliah = db.define("pembayaran_kuliah",{
	idPembayaran:{
		type:DataTypes.INTEGER,
		primaryKey:true,
		field:'id_pembayaran',
		autoIncrement:true
	},
	idMahasiswa:{
		type:DataTypes.INTEGER,
		field:'id_mahasiswa',
		reference:{
			model:Mahasiswa,
			key:'id_mahasiswa'
		}
	},
	tglBayar:{
		type:DataTypes.DATEONLY,
		field:'tgl_bayar'
	},
	jumlahBayar:{
		type:DataTypes.DOUBLE(18,2),
		field:'jumlah_bayar'
	},
	bankTransfer:{
		type:DataTypes.STRING(100),
		field:'bukti_transfer'
	},
	fotoBuktiPembayaran:{
		type:DataTypes.STRING(50),
		field:'foto_bukti_pembayaran'
	}
},{
	timestamps:false,
	freezeTableName:true
})

// Mahasiswa.hasOne(PembayaranKuliah,{foreignKey: 'id_mahasiswa'}); // Mahasiswa HasOne PembayaranKuliah
// PembayaranKuliah.belongsTo(Mahasiswa,{foreignKey: 'id_mahasiswa'}); // PembayaranKuliah BelongsTo Mahasiswa

export default PembayaranKuliah;

// Create If Tabel Name = NULL
(async()=>{
	await db.sync();
})();