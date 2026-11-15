import express from "express";
import {fetch,create,update,deleteuser} from "../controller/usercontroller.js";

const router = express.Router();

router.get("/getuser", fetch);
router.post("/createuser", create);
router.put("/updateuser/:id", update);
router.delete("/deleteuser/:id", deleteuser);

export default router;
