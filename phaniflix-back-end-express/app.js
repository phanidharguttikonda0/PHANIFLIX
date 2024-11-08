const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();
const cors = require('cors') ;
const express = require('express');
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
app.use(express.json());
// https://phaniflix.vercel.app
app.use(cors({
    origin: ['https://phaniflix.vercel.app','http://localhost:3000'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Origin', 'Accept'],
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
      console.log('The gmail was ',gmail,' and password was ',password)
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


app.post('/sign-up', async (req,res) => {
  const gmail = req.body.gmail ;
  const mobile = req.body.mobile ;
  const password = req.body.password ;
  const username = req.body.username ;
  const value = await checkDetails(gmail,mobile,username) ;
  console.log(`The out-put for ${gmail} , ${mobile}, ${username} was `, value)
  if(value){
    // we are going to insert
    createUser(gmail,mobile,username,password)
    res.send(true)
  }else{
    // we are not going to insert
    res.send(false)
  }
})


async function checkDetails(gmail,mobile,username){
    if(await gmailCheck(gmail) || await usernameCheck(username) || await mobileCheck(mobile)){
      return false ;
    }
    return true ;
}

async function usernameCheck(username){
  const {data, error} = await supabase.from('customers').select(`*`)
  .eq('username',username) ;
  if(error){
    console.log(`user-name check error was ${error}`)
  }
  if(data.length > 0){
    console.log(data)
  }
  return data.length > 0 ;
}

async function gmailCheck(gmail){
  const {data, error} = await supabase.from('customers').select(`*`)
  .eq('gmail',gmail) ;
  if(error){
    console.log(`gmail check error was ${error}`)
  }
  if(data.length > 0){
    console.log(data)
  }
  return data.length > 0 ;
}

async function mobileCheck(mobile){
  const { data, error } = await supabase
  .from('customers')
  .select(`*`)
  .eq('mobile',mobile) ;
  if(error){
    console.log(`mobiel check error was ${error}`)
  }
  if(data.length > 0){
    console.log(data)
  }
  return data.length > 0 ;
}


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




async function createUser(gmail,mobile,username,password) {
    const { data, error } = await supabase
      .from('customers')
      .insert([{ gmail: gmail, mobile: mobile ,
         password: password, username: username}]);
    
    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Inserted data:', data);
    }
  }
  




