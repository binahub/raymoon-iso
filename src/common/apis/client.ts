import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { getSession } from 'next-auth/react';

class Client {
  private axiosInstance: AxiosInstance;

  constructor(baseURL?: string | null, token?: string) {
    this.axiosInstance = axios.create({
      baseURL: baseURL ?? process.env.NEXT_PUBLIC_BASE_URL,
      // baseURL: 'http://78.157.51.13/food/api/v1',
      // baseURL: 'http://mobile-panel-service-payment-dev.apps.ocpdev.spsplan.local/api/v1',
      timeout: 10000, // 10 seconds timeout
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor
    this.axiosInstance.interceptors.request.use(
      async (config: any) => {
        // You can modify the request config here (e.g., add headers, authentication tokens, etc.)
        // console.log({ config });
        let headers: any = {};
        const session: any = await getSession();

        if (typeof window !== undefined) {
          const access = session?.apiToken;

          if (access) {
            headers['Authorization'] = `Bearer ${access}`;
          }
        }

        return { ...config, headers: { ...headers, ...config.headers } };
      },
      (error) => {
        // Handle request error
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        // You can modify the response here (e.g., handle common errors, transform data, etc.)
        return response;
      },
      (error) => {
        if (error.response && error.response.status === 401) {
          //Handler Error Here
        }
        if (error.response && error.response.status >= 400) {
          //Handler Error Here
        } else {
        }
        // Handle response error
        return Promise.reject(error);
      }
    );
  }

  public async get<T>(url: string, params: object = {}, headers: object = {}): Promise<T> {
    try {
      const response = await this.axiosInstance.get<T>(url, {
        params,
        headers,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async post<T>(url: string, data: object = {}, headers: object = {}): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(url, data, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async put<T>(url: string, data: object = {}, headers: object = {}): Promise<T> {
    try {
      const response = await this.axiosInstance.put<T>(url, data, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async patch<T>(url: string, data: object = {}, headers: object = {}): Promise<T> {
    try {
      const response = await this.axiosInstance.patch<T>(url, data, {
        headers,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async delete<T>(url: string, data: object = {}): Promise<T> {
    try {
      const response = await this.axiosInstance.delete<T>(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default Client;
