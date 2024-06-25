'use client';

import base64 from 'base-64';
import axios, { type AxiosResponse, type AxiosError } from 'axios';

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

const auth = {
  username: 'username',
  password: 'password',
};

const createAuth = base64.encode(`${auth.username}:${auth.password}`);

/**
 * Build API URL.
 *
 * @return {string} Builded API URL
 */
const buildUrl = (): string => {
  return 'https://website-api.com';
};

/**
 * Parse returning results as JSON value.
 *
 * @param {string} value - String value
 * @return {object} Parsed result
 */
const parseResults = (value: string): any => {
  const parse = JSON.parse(value);

  return parse;
};

/**
 * Call API and return results.
 *
 * @param {IRequest} parameters - IRequest
 * @return {IResponse} IResponse - API response
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
