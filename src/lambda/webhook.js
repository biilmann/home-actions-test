export function handler (event, context, callback) {
    if (event.headers['x-secret'] !== 'this-is-very-secret') {
        callback(null, {
            statusCode: 401,
            body: "Invalid header secret..."
        })
    }

    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            fulfillmentText: 'Woohoo! Yeps - This Google action is built with Netlify'
        })
    })
}