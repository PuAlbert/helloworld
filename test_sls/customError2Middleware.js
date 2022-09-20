



const customError2Middleware = () => {

    const customMiddlewareBefore = async (request) => {
        console.log("customErrorMiddleware 2 before");

        // ...
    }

    const customMiddlewareAfter = async (request) => {
        const { response } = request
        console.log("customErrorMiddleware 2 after");
        request.response = response
    }

    const customMiddlewareOnError2 = async (request) => {

        console.log("customeError 2");
		const errorResponse = {
			status: request.error.status || 500,
			statusCode: request.error.code || 500,
			message: request.error.message || request.error || "error",
			payload: null
		};

        request.response = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                // "Content-Type": "application/json"
            },
            statusCode: errorResponse.statusCode,
            body: JSON.stringify(errorResponse)
        };
        // return;
        console.log(10, request.response);
        // return request.response;
        // if (request.response === undefined) return
        // return customMiddlewareAfter(request)
    }

    return {
        before: customMiddlewareBefore,
        after: customMiddlewareAfter,
        onError: customMiddlewareOnError2
    }
}

export default customError2Middleware