import Router from 'express';

const homeRouter = Router();

homeRouter.get( '/', (request, response) => 
{
    response.send("Greetings from the backend!");
});

export default homeRouter;