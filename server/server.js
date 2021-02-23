import config from './src/config.js'
import app from './src/app.js';
import cors from 'cors';
//We enable to use cors in our server
app.use( cors() );

//server listen the port 3001
app.listen( config.express.port, (error) => 
{
    console.log(`Server listening on http://localhost:${config.express.port}\n Have a nice day!`);
});