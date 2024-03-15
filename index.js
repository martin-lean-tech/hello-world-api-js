require = require('esm')(module);
const express = require('express');
const app = express();
const MetringApi = require('./metering-sdk/api/MetringApi').default;

const apiInstance = new MetringApi();
apiInstance.apiClient.basePath = 'https://api.revenium.io/meter/v1/api';
apiInstance.apiClient.authentications['x-api-key'].apiKey = 'your-api-key';

app.post('/hello', async (req, res) => {
    const meteringData = {
      method: 'POST',
      url: '/hello',
      responseCode: 200,
      platformAPIKey: apiInstance.apiClient.authentications['x-api-key'].apiKey,
      requestHeaders: ['content-type'],
      responseHeaders: ['content-type'],
      elements: [
        { name: 'hello', value: 'world' }
      ]
    };
  
    try {
      await apiInstance.meter(meteringData);
      console.log('Metering data sent successfully');
      res.send('Hello World!');
    } catch (error) {
      console.error('Error sending metering data:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  app.listen(3000, () => console.log('Hello World API listening on port 3000'));
  