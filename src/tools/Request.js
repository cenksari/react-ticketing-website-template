import axios from 'axios';
import base64 from 'base-64';

import { auth, apiURLs } from '../configuration/Configuration';

const createAuth = base64.encode(`${auth.username}:${auth.password}`);

let returnValue = {
  data: {},
  status: 0,
};

/**
 * Build base URL from parameter type.
 *
 * @param {string} apiType - Api type
 */
const getBaseURL = (apiType) => {
  if (apiType) {
    return apiURLs[apiType];
  }

  return null;
};

/**
 * Get json value from server.
 *
 * @param {object} parameters - Request parameters
 */
const getResponse = async (parameters) => {
  // If parameters is null
  if (!parameters || !parameters.method || !parameters.url) {
    returnValue = {
      data: {
        title: 'Parameters, url or http method not found.',
      },
      status: 0,
    };

    return returnValue;
  }

  // Build url
  const baseURL = getBaseURL(parameters.apiType);

  const buildedUrl = `${baseURL}/${parameters.url}`;

  // Build axios headers from parameters
  let headers = {};

  if (parameters.headers) {
    parameters.headers.map((header) => {
      const key = Object.keys(header)[0];
      const value = Object.values(header)[0];

      headers[key] = value;

      return header;
    });
  }

  headers = {
    ...headers,
    Authorization: `Basic ${createAuth}`,
  };

  // Made request
  try {
    let response = {};

    if (parameters.method === 'GET') {
      response = await axios.get(buildedUrl, { headers, timeout: 15000 });
    } else if (parameters.method === 'POST') {
      response = await axios.post(buildedUrl, parameters.data, { headers, timeout: 15000 });
    } else {
      throw Error('Invalid http method. Please use GET or POST.');
    }

    // Successful request
    if (response.status === 200) {
      returnValue = {
        data: response.data,
        status: response.status,
      };

      return returnValue;
    }

    // Failed request
    returnValue = {
      data: {
        title: response.data.title || response.statusText,
      },
      status: response.status,
    };

    return returnValue;
  } catch (error) {
    // The request was made and the server responded with a status code
    if (error.response) {
      if (error.response.status === 404) {
        returnValue = {
          data: {
            title: error.response.data.title || error.response.data || 'Resource not found!',
          },
          status: error.response.status,
        };

        return returnValue;
      }

      returnValue = {
        data: {
          title: error.response.data.title || error.response.data,
        },
        status: error.response.status,
      };

      return returnValue;
    }

    // The request was made but no response was received
    if (error.request) {
      returnValue = {
        data: {
          title: `No response received. Maybe DNS not resolved or server not found. ${parameters.url})`,
        },
        status: 0,
      };

      return returnValue;
    }

    // Something happened in setting up the request that triggered an Error
    returnValue = {
      data: {
        title: error.message,
      },
      status: 0,
    };

    return returnValue;
  }
};

const Request = {
  getResponse,
};

export default Request;
