import Pembayaran from "../Models/PembayaranKuliahModel.js"

// Function: FindAll
export const getPembayaranAll = async(req, res) =>{
	try{
		const response = await Pembayaran.findAll();
		res.status(200).json(response);
	}catch(error){
		console.log(error.message);
	}
}

// Function: FindByID
export const getPembayaranByID = async(req, res) =>{
	try{
		const response = await Pembayaran.findOne({
			where:{
				idPembayaran:req.params.id
			}
		});
		res.status(200).json(response);
	}catch(error){
		console.log(error.message);
	}
}

// Function: Create
export const createPembayaran = async(req, res) =>{
	try{
		await Pembayaran.create(req.body);
		res.status(201).json({message:"User Created"});
	}catch(error){
		console.log(error.message);
	}
}

// Function: Update
export const updatePembayaran = async(req, res) =>{
	try{
		await Pembayaran.update(req.body,{
			where:{
				idPembayaran:req.params.id
			}
		});
		res.status(200).json({message:"User Edited"});
	}catch(error){
		console.log(error.message);
	}
}

// Function: Delete
export const deletePembayaran = async(req, res) =>{
	try{
		await Pembayaran.destroy({
			where:{
				idPembayaran:req.params.id
			}
		});
		res.status(200).json({message:"User Deleted"});
	}catch(error){
		console.log(error.message);
	}
}