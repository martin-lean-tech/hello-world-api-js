markdown
# Hello World API with Metering SDK

This is a sample Node.js Express API that demonstrates how to instrument an API with the Revenium Metering SDK to send usage data to the Revenium Metering API.

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)
- An API key for the Revenium Metering API

## Installation

1. Clone this repository:

git clone https://github.com/martin-lean-tech/hello-world-api-js

2. Install the dependencies:

cd hello-world-api
npm install

3. Set your Revenium Metering API key as an environment variable:

Replace `your-api-key` with your actual API key.

## Usage

1. Start the API server:

npm start

The API will be accessible at `http://localhost:3000`.

2. Make a POST request to the `/hello` endpoint:

curl -X POST http://localhost:3000/hello

This will trigger the API to send metering data to the Revenium Metering API using the Metering SDK.

3. Check the API response and logs:

- The API will respond with a "Hello World!" message if the metering data was successfully sent.
- The console will log a message indicating that the metering data was sent successfully.

## API Endpoints

### `POST /hello`

This endpoint sends a "Hello World!" message and instruments the Metering SDK to send usage data to the Revenium Metering API.

- Request Body: None
- Response: "Hello World!" message

## Metering SDK Integration

The Hello World API integrates the Revenium Metering SDK to send usage data to the Revenium Metering API. The SDK is initialized with the API key and base URL in the `index.js` file:

```javascript
const apiInstance = new MetringApi();
apiInstance.apiClient.basePath = 'https://api.revenium.io/meter/v1/api';
apiInstance.apiClient.authentications['x-api-key'].apiKey = REVENIUM_API_KEY;
```

The `/hello` endpoint uses the meter function from the SDK to send metering data:

```javascript
await apiInstance.meter(meteringData);
```

The meteringData object contains information about the API request, such as the method, URL, response code, headers, and custom elements.