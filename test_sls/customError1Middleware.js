import { jsonSafeParse }  from '@middy/util';




const customError1Middleware = () => {

    const customMiddlewareBefore = async (request) => {
        console.log("customErrorMiddleware 1 before");

        // ...
    }

    const customMiddlewareAfter = async (request) => {
        const { response } = request
        console.log("customErrorMiddleware 1 after");
        request.response = response
    }

    const customMiddlewareOnError1 = async (request) => {
        console.log("customeError 1");
        request.response.headers['Content-Type'] = typeof jsonSafeParse(request.response.body) === 'string' ? 'text/plain' : 'application/json';
        request.response.headers['hello'] = "test";
        return request.response;

        // if (request.response === undefined) return
        // return customMiddlewareAfter(request)
    }

    return {
        before: customMiddlewareBefore,
        after: customMiddlewareAfter,
        onError: customMiddlewareOnError1
    }
}

export default customError1Middleware