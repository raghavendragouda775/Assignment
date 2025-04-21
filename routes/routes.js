import express from "express"


const router=express.Router()

import {addSchool,listofSchools} from "../controllers/schoolController.js"

router.post('/addSchool',addSchool);
router.get('/listSchools',listofSchools);

export default router;