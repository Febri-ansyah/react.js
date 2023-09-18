import Jurusan from "../Models/JurusanModel.js"

// Function: FindAll
export const getJurusanAll = async(req, res) =>{
	try{
		const response = await Jurusan.findAll();
		res.status(200).json(response);
	}catch(error){
		console.log(error.message);
	}
}


// Function: FindByID
export const getJurusanByID = async(req, res) =>{
	try{
		const response = await Jurusan.findOne({
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
export const createJurusan = async(req, res) =>{
	try{
		await Jurusan.create(req.body);
		res.status(201).json({message:"User Created"});
	}catch(error){
		console.log(error.message);
	}
}

// Function: Update
export const updateJurusan = async(req, res) =>{
	try{
		await Jurusan.update(req.body,{
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
export const deleteJurusan = async(req, res) =>{
	try{
		await Jurusan.destroy({
			where:{
				id:req.params.id
			}
		});
		res.status(200).json({message:"User Deleted"});
	}catch(error){
		console.log(error.message);
	}
}