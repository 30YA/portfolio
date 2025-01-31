/* eslint-disable no-useless-catch */
import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

// import Toast from '@/common/components/toast/toast.component';
import { useToast } from '@/hooks/use-toast';

class Client {
  readonly axiosInstance: AxiosInstance;

  private readonly disableToast: boolean | undefined;

  constructor(baseURL?: string, disableToast?: boolean) {
    this.disableToast = disableToast ?? false;
    this.axiosInstance = axios.create({
      baseURL: baseURL ?? process.env.API_BASE_URL,
      timeout: 60000, // 60 seconds timeout
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor
    // this.axiosInstance.interceptors.request.use(
    //   async (config: any) => {
    // You can modify the request config here (e.g., add headers, authentication tokens, etc.)

    // const headers: any = {};

    // if (typeof window !== 'undefined') {
    //   const session = await getSession();
    //   const access = session?.user?.token;
    //   if (access) {
    //     headers.Authorization = `Bearer ${access}`;
    //   }
    // }

    // return { ...config, headers: { ...headers, ...config.headers } };
    //   },
    //   async (error) => {
    //     // Handle request error
    //     return await Promise.reject(error);
    //   }
    // );

    // Response interceptor
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        // You can modify the response here (e.g., handle common errors, transform data, etc.)
        return response;
      },

      async (error) => {
        // Handle response error
        const { toast } = useToast();
        if (error.response) {
          if (error.response.status === 401) {
            // Toast
            error.response.data?.error?.details.map(
              (errMsg: { message: string }) =>
                toast({ variant: 'destructive', title: errMsg.message })
            );
            // toast({
            //           variant: "destructive",
            //           title: "Uh oh! Something went wrong.",
            //           description: "There was a problem with your request.",
            //           action: <ToastAction altText="Try again">Try again</ToastAction>,
            //         })
            // signOut();
          }
          if (error.response.status >= 400) {
            // Toast
            if (error.response.data.details) {
              error.response.data?.error?.details.map(
                (errMsg: { message: string }) =>
                  toast({ variant: 'destructive', title: errMsg.message })
              );
            } else if (
              error.response.data.error.message &&
              !this.disableToast
            ) {
              // Toast.error(error?.response.data?.error.message as string);
              toast({
                variant: 'destructive',
                title: error?.response.data?.error.message as string,
              });
            }
          } else {
            error.response.data?.error?.details.map(
              (errMsg: { message: string }) =>
                toast({ variant: 'destructive', title: errMsg.message })
            );
          }
        }

        return await Promise.reject(error);
      }
    );
  }

  public async get<T>(
    url: string,
    params: object = {},
    headers: object = {}
  ): Promise<T> {
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

  public async post<T>(
    url: string,
    data: object = {},
    headers: object = {}
  ): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(url, data, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async put<T>(
    url: string,
    data: object = {},
    headers: object = {}
  ): Promise<T> {
    try {
      const response = await this.axiosInstance.put<T>(url, data, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async patch<T>(
    url: string,
    data: object = {},
    headers: object = {}
  ): Promise<T> {
    try {
      const response = await this.axiosInstance.patch<T>(url, data, {
        headers,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async delete<T>(url: string, headers: object = {}): Promise<T> {
    try {
      const response = await this.axiosInstance.delete<T>(url, {
        headers,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default Client;
