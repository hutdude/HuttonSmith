const axios = require('axios');

exports.handler = async function(event, context) {
  try {
    const { url, method, body, headers } = JSON.parse(event.body);
    
    const response = await axios({
      url,
      method,
      data: body,
      headers: {
        ...headers,
        'Origin': 'huttonsmith.netlify.app'
      }
    });

    return {
      statusCode: response.status,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify(error.response?.data || { error: 'Internal Server Error' })
    };
  }
};