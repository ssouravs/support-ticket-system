const { PrismaClient } = require("@prisma/client");
const prisma=new PrismaClient()

    const createSupportAgent=async (req,res)=>{
    const {name,email,description,active}=req.body;

    try{
        const newAgent=await prisma.supportAgent.create({
            data:{
                name,email,description,active
            }
        });

        res.json(newAgent);
        console.log('New Support Agent:', newAgent)
    }catch(err){
        console.error("Error creating agent:",err)
        res.status(500).json({message:"Internal server Error"})
    }
}

module.exports=createSupportAgent;