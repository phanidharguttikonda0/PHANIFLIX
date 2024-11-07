const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();
const cors = require('cors') ;
const express = require('express');
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  }));


async function getUsers(gmail,password) {
    const { data, error } = await supabase
      .from('customers')
      .select(`*`)
      .eq('gmail',gmail)
      .eq('password', password)
      ;
    
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      console.log('User data:', data);
      if(data.length === 0) return false;
      return true;
    }
}



const PORT = 8080 ;

  // Basic route
app.post('/login', async (req, res) => {

    // now we are going check the details and password is matching with that
    const gmail = req.body.gmail ;
    const password = req.body.password ;
    const value = await getUsers(gmail,password) ;
    console.log('The result was ', value)
    res.send(value);
    
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


/* 

async function createUser() {
    const { data, error } = await supabase
      .from('customers')
      .insert([{ gmail: 'phanikavya@gmail.com', mobile: '8885858760' ,
         password: 'Phani@9090', username: 'phanikavya'}]);
    
    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Inserted data:', data);
    }
  }
  
  createUser()

*/



