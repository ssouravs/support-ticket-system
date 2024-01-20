const createSupportAgent=require('../controllers/agentControllers/createSupportAgent')
const express=require ('express');
const router=express.Router();


router.post('/support-agents',createSupportAgent);


module.exports= router;