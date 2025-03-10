import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/users',userRoutes);

app.get("/",(req,res)=>
{
    res.send("server is ready");
})

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
})

app.get("/api/user",(req,res)=>
{
    res.send(users)
})