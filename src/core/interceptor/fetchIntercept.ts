import fetchIntercept, { FetchInterceptorResponse } from "fetch-intercept";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchInterceptor = () =>
  fetchIntercept.register({
    request: function (url: string, config: string) {
      console.log("baseUrl", baseUrl);

      return [url, config];
    },
    requestError: function (error: string) {
      return Promise.reject(error);
    },
    response: function (response: FetchInterceptorResponse) {
      return response;
    },
    responseError: function (error: string) {
      return Promise.reject(error);
    },
  });
