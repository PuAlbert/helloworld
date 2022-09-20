


const defaults = {};

const customMiddleware = (opts) => {
    const options = { ...defaults, ...opts }

    console.log(options);

    const customMiddlewareBefore = async (request) => {
        const { event, context } = request;

        console.log("customMiddleware before");

        // ...
    }

    const customMiddlewareAfter = async (request) => {
        const { response } = request
        console.log("customMiddleware after");
        request.response = response
    }

    const customMiddlewareOnError = async (request) => {
        console.log("on error ");
        if (request.response === undefined) return
        return customMiddlewareAfter(request)
    }

    return {
        before: customMiddlewareBefore,
        after: customMiddlewareAfter
        // onError: customMiddlewareOnError
    }
}

export default customMiddleware