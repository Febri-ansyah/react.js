import Express from "express";
import {
	getMahasiswaAll,
	getMahasiswaByID,
	createMahasiswa,
	updateMahasiswa,
	deleteMahasiswa,
} from "../Controllers/MahasiswaController.js";

const router = Express.Router();
router.get('/Mahasiswa', getMahasiswaAll);
router.get('/Mahasiswa/:id', getMahasiswaByID);
router.post('/Mahasiswa', createMahasiswa);
router.patch('/Mahasiswa/:id', updateMahasiswa);
router.delete('/Mahasiswa/:id', deleteMahasiswa);

export default router;