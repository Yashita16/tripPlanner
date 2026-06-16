import Trip from "../models/trips.model.js";


export const jointrip=async(req , res)=>{
  try {
     const {tripcode}=req.body;
  
     const trip = await Trip.findOne({ tripcode });
  
     if(!trip){
        return res.status(404).json({
          success:false,
          message:"Invalid trip code",
        });
     }
  
     if(trip.members.includes(req.user._id)){
       return res.status(400).json({
        success:false,
        message:"You Have already joined this trip",
       });
     }
  
     trip.members.push(req.user._id);
  
     await trip.save();
  
     res.status(200).json({
      success:true,
      message:"Joined Trip successfully",
      trip,
     });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });

    
  }

  



    
}