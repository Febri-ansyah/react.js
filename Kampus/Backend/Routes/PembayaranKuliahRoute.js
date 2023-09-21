import Express from "express";
import {
	getPembayaranAll,
	getPembayaranByID,
	createPembayaran,
	updatePembayaran,
	deletePembayaran,
} from "../Controllers/PembayaranKuliahController.js";

const router = Express.Router();
router.get('/Pembayaran', getPembayaranAll);
router.get('/Pembayaran/:id', getPembayaranByID);
router.post('/Pembayaran', createPembayaran);
router.patch('/Pembayaran/:id', updatePembayaran);
router.delete('/Pembayaran/:id', deletePembayaran);

export default router;