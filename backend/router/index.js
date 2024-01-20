const express=require('express')
const ticketRoute=require('./ticketRoute')
const agentRoute=require('./agentRoute')

const router=express.Router();


router.use('/api',ticketRoute);
router.use('/api',agentRoute);

module.exports= router;