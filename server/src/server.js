require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(()=> {
    console.log("mongo connected");
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    })
}).catch((err)=>{
        console.error('MongoDB Connection failed:', err.message)
});