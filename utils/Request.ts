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
  username: '68145831',
  password:
    '7cc5005d70004ef08e622c69a603014bda0b39138a48494b8214d6c50262ac7c494087085b194a7cbb66a25e24c249a9',
};

const createAuth = base64.encode(`${auth.username}:${auth.password}`);

const buildUrl = (): string => {
  return 'https://businesswise-memberapi.azurewebsites.net';
};

const parseResults = (results: string): any => {
  const parse = JSON.parse(results);

  return parse;
};

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
