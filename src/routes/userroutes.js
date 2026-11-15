import express from "express";
import {fetch,create,update,deleteuser} from "../controller/usercontroller.js";

const router = express.Router();

router.get("/getstudents", fetch);
router.post("/createstudent", create);
router.put("/updatestudent/:id", update);
router.delete("/deletestudent/:id", deleteuser);

export default router;