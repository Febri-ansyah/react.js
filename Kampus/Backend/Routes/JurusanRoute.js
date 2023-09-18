import Express from "express";
import {
	getJurusanAll,
	getJurusanByID,
	createJurusan,
	updateJurusan,
	deleteJurusan,
} from "../Controllers/JurusanController.js";

const router = Express.Router();
router.get('/Jurusan', getJurusanAll);
router.get('/Jurusan/:id', getJurusanByID);
router.post('/Jurusan', createJurusan);
router.patch('/Jurusan/:id', updateJurusan);
router.delete('/Jurusan/:id', deleteJurusan);

export default router;