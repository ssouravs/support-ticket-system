const { PrismaClient } = require("@prisma/client");
const prisma=new PrismaClient()

    const getAllSupportTickets=async (req,res)=>{
    try {
        const allTickets = await prisma.SupportTicket.findMany();
        res.json(allTickets);
      } catch (error) {
        console.error('Error fetching support tickets:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

module.exports=getAllSupportTickets;