import middy from '@middy/core'
import cors from '@middy/http-cors'
import customMiddleware from './customMiddleware.js'
import customError1Middleware from './customError1Middleware.js'
// import customError2Middleware from './customError2Middleware.js'

// import httpErrorHandler from "@middy/http-error-handler";
// import { createError } from '@middy/util';
import createError from 'http-errors';
import httpErrorHandler from '@middy/http-error-handler';

const lambdaHandler = async (event, context) => {
    throw new createError["401"]; 
    // throw new Error("sdsa");
    // return { "status": 200 };
}

export const handler = middy(lambdaHandler)
    // .use(customMiddleware({
    //     option1: 'foo',
    //     option2: 'bar'
    // }))
    // .use(httpErrorHandler())
    // .use([cors(), customError1Middleware()]);
    .use([httpErrorHandler(), cors()]);