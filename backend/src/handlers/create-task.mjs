
const getBaseUrl = (event) => {
    const {headers, requestContext} = event;
    const protocol = headers['X-Forwarded-Proto'] || 'http';
    const host = headers['Host'] || 'localhost';
    const stage = !host.startsWith('localhost') ? `/${requestContext.stage}` : '';
    return `${protocol}://${host}${stage}`;
}


const getId = (function() {
    let sequence = 0;
    return function() {
      sequence++;
      return sequence;
    };
})();

export const lambdaHandler = async (event, context) => {
    console.log(event);
    const id = getId();
    const request = JSON.parse(event.body);
    request.id = `${id}`;

    const response = {
        statusCode: 201,
        headers: {
          Location: `${getBaseUrl(event)}/tasks/${id}`
        },
        body: JSON.stringify(request)
    };

    return response;
};
