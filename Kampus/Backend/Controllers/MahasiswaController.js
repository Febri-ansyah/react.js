import Mahasiswa from "../Models/MahasiswaModel.js"

// Function: FindAll
export const getMahasiswaAll = async(req, res) =>{
	try{
		const response = await Mahasiswa.findAll();
		res.status(200).json(response);
	}catch(error){
		console.log(error.message);
	}
}

// Function: FindByID
export const getMahasiswaByID = async(req, res) =>{
	try{
		const response = await Mahasiswa.findOne({
			where:{
				id:req.params.id
			}
		});
		res.status(200).json(response);
	}catch(error){
		console.log(error.message);
	}
}

// Function: Create
export const createMahasiswa = async(req, res) =>{
	try{
		await Mahasiswa.create(req.body);
		res.status(201).json({message:"User Created"});
	}catch(error){
		console.log(error.message);
	}
}

// Function: Update
export const updateMahasiswa = async(req, res) =>{
	try{
		await Mahasiswa.update(req.body,{
			where:{
				id:req.params.id
			}
		});
		res.status(200).json({message:"User Edited"});
	}catch(error){
		console.log(error.message);
	}
}

// Function: Delete
export const deleteMahasiswa = async(req, res) =>{
	try{
		await Mahasiswa.destroy({
			where:{
				id:req.params.id
			}
		});
		res.status(200).json({message:"User Deleted"});
	}catch(error){
		console.log(error.message);
	}
}