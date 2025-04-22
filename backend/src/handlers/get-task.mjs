export const lambdaHandler = async (event, context) => {
    console.log(event);
    console.log(context);
    const id = event.pathParameters.id;
    const task = {
        id: id,
        text: 'This is my task',
        status: 'todo',
        tags: []
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify(task)
    };

    return response;
};
