const { PrismaClient } = require("@prisma/client");
const prisma=new PrismaClient();

const createSupportTicket = async (req, res) => {
    const { topic, severity, type, status,resolvedOn } = req.body;
  
    try {
      const orderedAgents = await prisma.supportAgent.findMany({
        orderBy: { agent_id: 'asc' },
      });
  
      if (orderedAgents.length === 0) {
        return res.status(400).json({ error: 'No support agents available.' });
      }
  
      // Calculate the index of the next support agent in a round-robin manner
      const lastAssignedAgentId = req.body.lastAssignedAgentId || orderedAgents[0].agent_id;
      const currentIndex = orderedAgents.findIndex(agent => agent.agent_id === lastAssignedAgentId);
      //const nextIndex = (currentIndex + 1) % orderedAgents.length;
      let nextIndex = (currentIndex + 1) % orderedAgents.length;
        while (!orderedAgents[nextIndex].active) {
        nextIndex = (nextIndex + 1) % orderedAgents.length;
        }
      const nextAgent = orderedAgents[nextIndex];

      console.log(nextAgent)
  
      // Create a new support ticket and assign it to the next support agent
      const newTicket = await prisma.supportTicket.create({
        data: {
          topic,
          ticketCreatedAt: new Date(),
          severity,
          type,
          assignedTo: { connect: { agent_id: nextAgent.agent_id } },
          status,
          resolvedOn: new Date(),
        },
      });
  
      res.json(newTicket);
    } catch (error) {
      console.error('Error creating support ticket:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
module.exports=createSupportTicket;