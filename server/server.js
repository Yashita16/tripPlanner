import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.config.js';
import authRoutes from './routes/auth.route.js';
import tripRoutes from './routes/trips.route.js';
import createtripRoutes from './routes/createtrip.route.js'
import jointripRoutes from './routes/jointrip.route.js'


dotenv.config();


connectDB();

const app=express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials:true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
  res.send('Hello World');
})

app.use('/api/auth', authRoutes);
app.use("/api/trips", tripRoutes);
app.use('/api/createtrips' , createtripRoutes);
app.use("/api/jointrips",jointripRoutes)


app.listen(process.env.PORT , ()=>{
  console.log(`Server is running on the port no ${process.env.PORT}`);
})