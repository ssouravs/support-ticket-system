const createSupportTicket=require('../controllers/ticketControllers/createSupportTicket')
const getAllSupportTickets=require('../controllers/ticketControllers/getAllSupportTickets')
const express=require ('express');
const router=express.Router();


router.post('/support-tickets',createSupportTicket);

router.get('/support-tickets',getAllSupportTickets);

module.exports= router;