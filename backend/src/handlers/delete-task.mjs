export const lambdaHandler = async (event, context) => {
    const id = event.pathParameters.id;
    const response = {
        statusCode: 204,
    };

    return response;
};
