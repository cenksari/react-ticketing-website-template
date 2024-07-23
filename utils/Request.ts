'use client';

import base64 from 'base-64';
import axios, { type AxiosResponse, type AxiosError } from 'axios';

// interfaces
export interface IResponse {
  data: {
    title?: string;
    results?: any;
  };
  status?: number;
}

export interface IRequest {
  url: string;
  method: string;
  postData?: any;
}

// variables
const auth = {
  username: 'username',
  password: 'password',
};

const createAuth = base64.encode(`${auth.username}:${auth.password}`);

/**
 * Generates the base URL for API requests.
 *
 * @return {string} The base URL for API requests.
 */
const buildUrl = (): string => {
  return 'https://website-api.com';
};

/**
 * Parses a JSON string into a JavaScript object.
 *
 * @param {string} value - The JSON string to be parsed.
 * @return {any} The parsed JavaScript object.
 */
const parseResults = (value: string): any => {
  const parse = JSON.parse(value);

  return parse;
};

/**
 * This function makes a request to the API and returns the response.
 *
 * @param {IRequest} parameters - The parameters for the request.
 * @return {Promise<IResponse>} The response from the API.
 */
const getResponse = async (parameters: IRequest): Promise<IResponse> => {
  let response: AxiosResponse<any, any>;

  const url = `${buildUrl()}/${parameters.url}`;

  const headers = { Authorization: `Basic ${createAuth}` };

  try {
    if (parameters.method === 'GET') {
      response = await axios.get(url, { headers, timeout: 15000 });
    } else if (parameters.method === 'POST') {
      response = await axios.post(url, parameters.postData, { headers, timeout: 15000 });
    } else {
      throw new Error('Invalid HTTP method. Please use GET or POST.');
    }

    const d: IResponse = {
      data: response.data,
      status: response.status,
    };

    return d;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const err = error as AxiosError;

      const responseText: string = err.request?.responseText;

      let parsedResults;

      if (responseText !== '') {
        parsedResults = parseResults(responseText);
      } else {
        parsedResults = { title: err.message };
      }

      const d: IResponse = {
        data: parsedResults,
        status: err.response?.status,
      };

      return d;
    }

    const err = error as Error;

    const d: IResponse = {
      data: {
        title: err.message,
      },
      status: 0,
    };

    return d;
  }
};

const Request = {
  getResponse,
};

export default Request;
