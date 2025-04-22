export const lambdaHandler = async (event, context) => {
    const tasks = [
        {
            id: '10',
            text: 'Task 10',
            status: 'todo',
            tags: [
                'CSS'
            ]
        },
        {
            id: '20',
            text: 'Task 20',
            status: 'doing',
            tags: [
                'HTML'
            ]
        }
    ];
    const response = {
        statusCode: 200,
        body: JSON.stringify(tasks)
    };

    return response;
};
