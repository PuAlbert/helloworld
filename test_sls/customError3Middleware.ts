const DEFAULT_ERROR_STATUS = 'error';
const DEFAULT_ERROR_MESSAGE = 'Unknown error';
const DEFAULT_STATUS_CODE = 500;

const customError3Handler = () => ({
    onError: (request: { error: any; response: any }) => {
        console.log(333333333333);
        const errorResponse = {
            status: request.error.status || DEFAULT_ERROR_STATUS,
            statusCode: request.error.code || DEFAULT_STATUS_CODE,
            message: request.error.message || request.error || DEFAULT_ERROR_MESSAGE,
            payload: null
        };

        if (request.error?.details) {
            Object.assign(errorResponse, { payload: request.error.details[0] });
        }

        if (request.error?.message === 'Unauthorized') {
            Object.assign(errorResponse, { unauthorized: true });
        }

        // request.response = {
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json'
        //     },
        //     statusCode: errorResponse.statusCode,
        //     body: JSON.stringify(errorResponse)
        // };

        console.log("777777778777");

        // console.error(`Request error:${request.error}`);
        // console.error(111111111, `Request error stack:${request.error.stack}`);
        // return request.response;
    }
});
export default customError3Handler