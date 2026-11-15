import userModel from "../model/usermodel.js";

export const fetch = async (req, res) => {
    try {
        const users = await userModel.find();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }   
        return res.status(200).json({ message: "Get Users", users });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }   
}

export const create = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        const { email } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }
        const savedUser = await newUser.save();
        res.status(201).json({ message: "User created successfully", user: savedUser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const userexists = await userModel.findOne({ _id: id });
        if (!userexists) {
            return res.status(404).json({ message: "User not found" });
        }
        const updatedUser = await userModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    }      
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};  

export const deleteuser = async (req, res) => {
    try {
        const { id } = req.params;
        const userexists = await userModel.findOne({ _id: id });    
    if (!userexists) {
        return res.status(404).json({ message: "User not found" });
    }   
        await userModel.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};      

