import middy from '@middy/core'
import httpErrorHandler from '@middy/http-error-handler'
import cors from '@middy/http-cors'
import createError from 'http-errors';

const handler = middy((event, context) => {
    throw new createError.UnprocessableEntity()
})
handler.use(httpErrorHandler())
    .use(cors())

// when Lambda runs the handler...
handler({}, {}, (_, response) => {
    console.log(13333, response.headers);
    t.is(response.headers['Access-Control-Allow-Origin'], '*')
    t.deepEqual(response, {
        statusCode: 422,
        body: 'Unprocessable Entity'
    })
})